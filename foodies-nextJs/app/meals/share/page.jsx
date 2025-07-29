'use client'

import classes from './page.module.css';
import ImagePicker from "@/components/meals/image-picker";
import {handleShareMeal} from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import {useActionState} from "react";

const initialState = {
    error: false, message: '', validationErrors: {},
}

export default function ShareMealPage() {
    const [formState, formAction] = useActionState(handleShareMeal, initialState);

    return (<>
        <header className={classes.header}>
            <h1>
                Share your <span className={classes.highlight}>favorite meal</span>
            </h1>
            <p>Or any other meal you feel needs sharing!</p>
        </header>
        <main className={classes.main}>
            <form className={classes.form} action={formAction}>
                <div className={classes.row}>
                    <p>
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name"/>
                        {formState.validationErrors?.name && (
                            <span className={classes.error}>{formState.validationErrors.name}</span>)}
                    </p>

                    <p>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" name="email"/>
                        {formState.validationErrors?.email && (
                            <span className={classes.error}>{formState.validationErrors.email}</span>)}
                    </p>
                </div>

                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title"/>
                    {formState.validationErrors?.title && (
                        <span className={classes.error}>{formState.validationErrors.title}</span>)}
                </p>

                <p>
                    <label htmlFor="summary">Short Summary</label>
                    <input type="text" id="summary" name="summary"/>
                    {formState.validationErrors?.summary && (
                        <span className={classes.error}>{formState.validationErrors.summary}</span>)}
                </p>

                <p>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        rows="10"
                    ></textarea>
                    {formState.validationErrors?.instructions && (
                        <span className={classes.error}>{formState.validationErrors.instructions}</span>)}
                </p>

                <ImagePicker label="Image Picker" name="image" error={formState.validationErrors?.image}/>

                <p className={classes.actions}>
                    <MealsFormSubmit/>
                </p>

                {formState.error && (<p className={classes.generalError}>{formState.message}</p>)}
            </form>
        </main>
    </>)
}