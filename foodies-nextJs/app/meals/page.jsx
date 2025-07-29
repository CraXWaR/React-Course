import classes from "./page.module.css";

import {Suspense} from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getAllMeals} from "@/lib/meals";

export const metadata = {
    title: 'All Meals', description: 'Browse meals, shared by a food-loving community.',
};

async function Meals() {
    const meals = await getAllMeals();

    return (<MealsGrid meals={meals}/>);
}

export default function MealsPage() {
    return (<>
        <header className={classes.header}>
            <h1>
                Meals created by <span className={classes.highlight}>you</span>
            </h1>
            <p>Choose your Meal.</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share Your Favourite Meal</Link>
            </p>
        </header>
        <main>
            <Suspense fallback={<p className={classes.loading}>Loading Meals...</p>}>
                <Meals/>
            </Suspense>
        </main>
    </>);
}
