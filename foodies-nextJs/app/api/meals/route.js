import {getConnection} from "@/lib/db";

export async function GET() {
    try {
        const conn = await getConnection();
        const [meals] = await conn.query('SELECT * FROM meals');
        await conn.end();

        return new Response(JSON.stringify(meals), {
            status: 200,
            headers: {'Content-Type': 'application/json'},
        });
    } catch (error) {
        console.error('DB Error:', error);
        return new Response(
            JSON.stringify({error: 'Failed to fetch meals'}),
            {status: 500, headers: {'Content-Type': 'application/json'}}
        );
    }
}
