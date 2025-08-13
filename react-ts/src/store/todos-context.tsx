import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextObject = { items: Todo[]; addTodo: (text: string) => void; removeTodo: (id: string) => void; }

export const TodosContext = React.createContext<TodosContextObject>({
    items: [],
    addTodo: () => {
    },
    removeTodo: (id: string) => {
    }
});

const TodosContextProvider: React.FC = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Buy groceries", "1"),
        new Todo("Walk the dog", "2"),
        new Todo("Read a book", "3"),
        new Todo("Finish TypeScript project", "4"),
        new Todo("Call a friend", "5"),
        new Todo("Plan weekend trip", "6")
    ]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setTodos((prevState) => prevState.concat(newTodo));
    };

    const onRemoveTodo = (id: string) => {
        setTodos((prevState) => prevState.filter(todo => todo.id !== id));
    };

    const contextValue: TodosContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: onRemoveTodo,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;