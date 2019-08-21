import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header'
import Main from './components/Main'

library.add(faPencilAlt);

// const initialTodos = [
//     {
//         id: 1,
//         content: 'Pay the bills'
//     },
//     {
//         id: 2,
//         content: 'Read books'
//     },
//     {
//         id: 3,
//         content: 'Write a blog post'
//     },
//     {
//         id: 4,
//         content: 'Pay the bills'
//     },
// ];

const App = () => {
    const [todos, setTodos] = useState(null);
    const [todoInputText, setTodoInputText] = useState('');
    const [isEditingTodo, setIsEditingTodo] = useState(false);
    const [todoBeingEdited, setTodoBeingEdited] = useState(null)

    const deleteTodo = (todoId) => {
        let newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    };

    const addTodo = (todo) => {
        let newTodo = {
            id: Math.random(),
            content: `${todo[0].toUpperCase() + todo.slice(1, todo.length)}`
        };
        let newTodos = todos ?  [newTodo, ...todos] : [newTodo];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    };

    const clearTodos =() => {
      localStorage.removeItem('todos');
      setTodos(null)
    };

    const saveEdit = (newTodoContent) => {
        let indexOfEditedTodo = todos.indexOf(todoBeingEdited);
        let newTodos = [...todos];
        let newTodo = {
            id: todoBeingEdited.id,
            content: newTodoContent
        };

        if(indexOfEditedTodo !== -1) {
            newTodos[indexOfEditedTodo] = newTodo
        }
        setTodos(newTodos);
        // localStorage.setItem('todos', newTodos);
        setIsEditingTodo(false)
    };

    const editTodo = (editedTodoId) => {
        setIsEditingTodo(true);
        const todoToEdit = todos.find(todo => todo.id === editedTodoId);
        setTodoInputText(todoToEdit.content);
        setTodoBeingEdited(todoToEdit)
    };

    useEffect(() => {
        document.title='Noted';
        let todos = localStorage.getItem('todos');
        todos = JSON.parse(todos);
        setTodos(todos);
    }, []);

    return (
        <>
            <Header/>
            <Main todos={todos}
                  deleteTodo={deleteTodo}
                  addTodo={addTodo}
                  clearTodos={clearTodos}
                  todoInputText={todoInputText}
                  isEditingTodo={isEditingTodo}
                  editTodo={editTodo}
                  saveEdit={saveEdit}
            />
        </>
    )
};

export default App