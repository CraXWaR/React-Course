import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMeals() {
            try {
                const res = await fetch('http://localhost:3000/meals');
                if (!res.ok) {
                    throw new Error('Failed to fetch meals');
                }
                const data = await res.json();
                setMeals(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchMeals();
    }, []);

    if (isLoading) return <p>Loading meals...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<ul id="meals">
            {meals.map((meal) => (<MealItem key={meal.id} meal={meal}/>))}
        </ul>);
}