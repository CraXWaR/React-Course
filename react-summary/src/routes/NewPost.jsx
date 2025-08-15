import classes from './NewPost.module.css';
import {useState} from "react";
import Modal from "../components/Modal.jsx";

function NewPost(props) {
    const [enteredText, setEnteredText] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function handleTextChange(e) {
        setEnteredText(e.target.value);
    }

    function handleAuthorChange(e) {
        setEnteredAuthor(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            text: enteredText,
            author: enteredAuthor,
        };

        props.addPost(data);
        props.onCancel();
    }

    return (<Modal>
            <form className={classes.form} onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={handleTextChange}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={handleAuthorChange}/>
                </p>
                <p className={classes.actions}>
                    <button type="submit">Add Post</button>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                </p>
            </form>
        </Modal>);
}

export default NewPost;