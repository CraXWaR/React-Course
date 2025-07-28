'use server'

import path from 'path'
import {writeFile} from 'fs/promises'
import slugify from 'slugify'
import xss from 'xss'
import {createMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export async function handleShareMeal(formData) {
    try {
        const creator = formData.get('name');
        const creator_email = formData.get('email');
        const imageFile = formData.get('image');
        const title = formData.get('title');
        const summary = formData.get('summary');
        const instructions = formData.get('instructions');

        if (!title || !summary || !instructions || !imageFile) {
            throw new Error('Missing required form fields.');
        }

        if (typeof imageFile !== 'object' || !imageFile.name) {
            throw new Error('Invalid image file.');
        }

        const buffer = Buffer.from(await imageFile.arrayBuffer());

        const sanitizedTitle = xss(title.trim());
        const sanitizedSummary = xss(summary.trim());
        const sanitizedInstructions = xss(instructions.trim());
        const slug = slugify(sanitizedTitle, {lower: true});

        const fileName = `${slug}-${Date.now()}-${imageFile.name}`;
        const imagePath = path.join(process.cwd(), 'public/images', fileName);

        await writeFile(imagePath, buffer);

        const meal = {
            title: sanitizedTitle,
            summary: sanitizedSummary,
            instructions: sanitizedInstructions,
            image: `/images/${fileName}`,
            creator,
            creator_email,
        };

        await createMeal(meal);
    } catch (error) {

        console.error('Error while handling form submission:', error);
        return {
            error: true,
            message: error.message || 'Something went wrong.',
        };
    }
    redirect(`/meals`);
}