import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import TodoList from './TodoList'

afterEach(cleanup)


describe('todo lists test', () => {
    let todo = {id: 1, content:'test todo', isChecked: true}
    let deleteTodo = jest.fn()
    let completeTodo = jest.fn()
    let editTodo = jest.fn()

    test('it displays todo', () => {
        const {container, getByTestId} = render(<TodoList todo={todo} />)
        const deleteBtn = getByTestId('delete-todo')
        const checkbox = getByTestId('checkbox')
        const todoContent = getByTestId('todo-content')
        const editBtn = getByTestId('edit-icon')

        expect(deleteBtn).toBeInTheDocument()
        expect(todoContent).toBeInTheDocument()
        expect(editBtn).toBeInTheDocument()
        expect(checkbox).toBeInTheDocument()
        expect(todoContent).toHaveTextContent(todo.content)
    })

    test('it deletes todo', () => {
        const {container, getByTestId} = render(<TodoList todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>)
        const deleteBtn = getByTestId('delete-todo')

        fireEvent.click(deleteBtn)

        expect(deleteTodo).toHaveBeenCalledTimes(1)
    })

    test('it edits todo', () => {
        const {container, getByTestId} = render(<TodoList todo={todo} editTodo={editTodo}/>)
        const editBtn = getByTestId('edit-icon')
        const todoContentContainer = getByTestId('todo-content')
        expect(todoContentContainer.style.textDecoration).toBe("line-through")
        fireEvent.click(editBtn)

        expect(editTodo).toHaveBeenCalledTimes(1)
        expect(editTodo).toHaveBeenCalledWith(todo.id)
    })

    test('it marks todo as complete todo', () => {
        const {container, getByTestId} = render(<TodoList todo={todo} completeTodo={completeTodo}/>)
        const checkbox = getByTestId('checkbox')
        fireEvent.click(checkbox)

        expect(completeTodo).toHaveBeenCalledTimes(1)
        expect(completeTodo).toHaveBeenCalledWith(todo.id)
    })

})