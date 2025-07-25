import {cache} from 'react'
import {getConnection} from './db'
import {notFound} from "next/navigation";

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