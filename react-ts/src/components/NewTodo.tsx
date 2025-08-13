import React, {useContext, useRef} from "react";
import {TodosContext} from "../store/todos-context";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
    const ctx = useContext(TodosContext);

    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const text = textInputRef.current!.value;

        if (text.trim().length === 0) {
            return
        }

        ctx.addTodo(text);
        textInputRef.current!.value = '';
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='text'>Todo Text</label>
            <input type="text" id="text" ref={textInputRef}/>
            <button>Add</button>
        </form>
    );
};

export default NewTodo;