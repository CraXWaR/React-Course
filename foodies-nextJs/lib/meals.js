import {cache} from 'react'
import {getConnection} from './db'
import {notFound} from "next/navigation";

import slugify from 'slugify'

function wait(ms) {
    return new Promise((r) => setTimeout(r, ms))
};

export const getAllMeals = cache(async () => {
    await wait(2000)

    if (Math.random() < 0.1) {
        throw new Error('Simulated 10% DB failure')
    }

    const conn = await getConnection()
    const [rows] = await conn.query('SELECT * FROM meals')
    await conn.end()
    return rows
});

export async function getMealBySlug(slug) {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT * FROM meals WHERE slug = ?', [slug]);
    await conn.end();

    if (rows.length === 0) {
        notFound()
    }

    return rows[0];
}

export async function createMeal({title, summary, instructions, image, creator, creator_email}) {
    try {
        if (!title || !summary || !instructions || !image || !creator) {
            throw new Error('Missing required fields.')
        }

        const conn = await getConnection()
        const slug = slugify(title, {lower: true})

        const query = `
            INSERT INTO meals (title, summary, instructions, slug, image, creator, creator_email)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `
        const values = [title, summary, instructions, slug, image, creator, creator_email]

        const [result] = await conn.execute(query, values)
        await conn.end()

        return {success: true, id: result.insertId, slug}
    } catch (error) {
        console.error('Create Meal Error:', error)
        throw new Error('Could not create meal.')
    }
}
