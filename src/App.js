import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'

const initialTodos = [
    {
        id: 1,
        content: 'Pay the bills'
    },
    {
        id: 2,
        content: 'Read books'
    },
    {
        id: 3,
        content: 'Write a blog post'
    },
    {
        id: 4,
        content: 'Pay the bills'
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialTodos);

    const deleteTodo = (todoId) => {
        let newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos)
    };

    const addTodo = (todo) => {
        let newTodo = {
            id: todos.length + 1,
            content: todo
        };
        let newTodos = [newTodo, ...todos];
        setTodos(newTodos)
    };

    useEffect(() => document.title='Noted')

    return (
        <>
            <Header/>
            <Main todos={todos} deleteTodo={deleteTodo} addTodo={addTodo}/>
        </>
    )
};

export default App