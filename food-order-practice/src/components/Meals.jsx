import {useEffect, useState} from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {}

export default function Meals() {
    // const [meals, setMeals] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState(null);

    const {data: meals, loading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (loading) return <p className='center'>Loading...</p>;
    if (error) return <Error title='Failed to get meals' message={error} />;

    // useEffect(() => {
    //     async function fetchMeals() {
    //         try {
    //             const res = await fetch('http://localhost:3000/meals');
    //             if (!res.ok) {
    //                 throw new Error('Failed to fetch meals');
    //             }
    //             const data = await res.json();
    //             setMeals(data);
    //         } catch (error) {
    //             setError(error);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //
    //     fetchMeals();
    // }, []);
    // if (isLoading) return <p>Loading meals...</p>;

    return (<ul id="meals">
        {meals.map((meal) => (<MealItem key={meal.id} meal={meal}/>))}
    </ul>);
}
