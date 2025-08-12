import React, {useRef} from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const text = textInputRef.current!.value;

        if (text.trim().length === 0) {
            return
        }

        props.onAddTodo(text);
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