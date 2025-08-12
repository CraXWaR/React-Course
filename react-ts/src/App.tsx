import Todos from "./components/Todos";

import './App.css';
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Buy groceries"),
        new Todo("Walk the dog"),
        new Todo("Read a book"),
        new Todo("Finish TypeScript project"),
        new Todo("Call a friend"),
        new Todo("Plan weekend trip")
    ]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos((prevState) => prevState.concat(newTodo));
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </div>
    );
}

export default App;
