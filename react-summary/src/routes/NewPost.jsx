import classes from './NewPost.module.css';
import Modal from "../components/Modal.jsx";
import {Form, Link, redirect} from "react-router-dom";

function NewPost() {
    return (<Modal>
        <Form method='POST' className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} name="text"/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required name="author"/>
            </p>
            <p className={classes.actions}>
                <button type="submit">Add Post</button>
                <Link to='..' type="button">Cancel</Link>
            </p>
        </Form>
    </Modal>);
}

export default NewPost;

export async function addPostAction({request}) {
    const formData = await request.formData();

    const post = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        text: formData.get("text"),
        author: formData.get("author"),
    };

    const response = await fetch("http://localhost:8080/posts", {
        method: "POST", headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(post),
    });

    if (!response.ok) {
        throw new Response("Failed to save post", {status: response.status});
    }

    return redirect("/");
}