"use client";
import { useParams } from 'next/navigation';

export default function MealDetailPage() {
    // const { mealId } = useParams();

    return (
        <div>
            <h1>Meal Details</h1>
            <p>Showing details for meal: <strong>mealId</strong></p>
        </div>
    );
}
