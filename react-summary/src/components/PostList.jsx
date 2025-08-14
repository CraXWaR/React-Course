import Post from "./Post.jsx";

import classes from './PostList.module.css';
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

export default function PostList({isPosting, onStopPosting}) {
    const [enteredText, setEnteredText] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function handleTextChange(e) {
        setEnteredText(e.target.value);
    }

    function handleAuthorChange(e) {
        setEnteredAuthor(e.target.value);
    }

    return (<>
        {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onTextChange={handleTextChange} onAuthorChange={handleAuthorChange} onCancel={onStopPosting}/>
            </Modal>)}

        <ul className={classes.posts}>
            <Post author={enteredAuthor} text={enteredText}/>
            <Post author="Marcus Lee" text="Just finished reading an amazing book."/>
            <Post author="Sofia Martinez" text="Baking cookies all afternoon — house smells amazing!"/>
        </ul>
    </>);
}