import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

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
            <main className={classes.main}>
                <MealsGrid meals={[]}/>
            </main>
        </>);
}
