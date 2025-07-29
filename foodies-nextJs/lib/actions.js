'use server'

import path from 'path'
import {writeFile} from 'fs/promises'
import slugify from 'slugify'
import xss from 'xss'
import {createMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function validateFormData(formData) {
    const errors = {}

    const name = formData.get('name')?.trim()
    const email = formData.get('email')?.trim()
    const title = formData.get('title')?.trim()
    const summary = formData.get('summary')?.trim()
    const instructions = formData.get('instructions')?.trim()
    const image = formData.get('image')

    if (!name) errors.name = 'Name is required.'
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = 'A valid email is required.'
    if (!title) errors.title = 'Title is required.'
    if (!summary) errors.summary = 'Summary is required.'
    if (!instructions) errors.instructions = 'Instructions are required.'
    if (!image || typeof image !== 'object' || !image.name) {
        errors.image = 'A valid image file is required.'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
        values: {
            name,
            email,
            title,
            summary,
            instructions,
            image,
        }
    }
}

export async function handleShareMeal(prevState, formData) {
    const {isValid, errors, values} = validateFormData(formData)

    if (!isValid) {
        return {
            error: true,
            message: 'Validation failed.',
            validationErrors: errors,
        }
    }

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
        revalidatePath('/meals');
    } catch (error) {

        console.error('Error while handling form submission:', error);
        return {
            error: true,
            message: error.message || 'Something went wrong.',
        };
    }
    redirect(`/meals`);
}