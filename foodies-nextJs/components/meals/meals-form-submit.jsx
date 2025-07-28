'use client';

import {useFormStatus} from "react-dom";

export default function MealsFormSubmit() {
    const {pending} = useFormStatus();

    return (<button className="meals-form-submit-btn"
                    disabled={pending}>{pending ? 'Submitting...' : ' Share Meal'}</button>);
}