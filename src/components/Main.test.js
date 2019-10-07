import React from 'react'
import {render, fireEvent, waitForElement, cleanup} from '@testing-library/react'
import Main from './Main'

afterEach(cleanup)

describe('tests for main', () => {
    const addTodo = jest.fn()

    test('it displays todos', () => {
        let todos = [
            {id:1, content: 'testing q'},
            {id:2, content: 'testing q'},
            {id:3, content: 'testing q'}
        ]
        const {getAllByTestId} = render(<Main todos={todos}/>)
        const todoLists = getAllByTestId('todo-list')
        expect(todoLists.length).toBe(todos.length)
    })


    test('it adds todos', async () => {
        const {container, getByTestId, getByText} = render(<Main addTodo={addTodo}/>)

        const newTodo = 'New todo to add'

        const inputField = container.querySelector('input')
        const form = container.querySelector('form')
        const submitBtn = getByTestId('add-button')

        inputField.value = newTodo
        fireEvent.change(inputField)
        fireEvent.submit(form)

        expect(addTodo).toHaveBeenCalledTimes(1)
    })

    test('it deletes todo', async () => {
        let todos = [
            {id:1, content: 'testing q'}
        ]
        const deleteTodo = jest.fn()
        const {container, getByTestId, findByTestId} = render(<Main todos={todos} deleteTodo={deleteTodo}/>)
        const deleteBtn = getByTestId('delete-todo')
        fireEvent.click(deleteBtn)
        expect(deleteTodo).toHaveBeenCalledTimes(1)
        expect(deleteTodo).toHaveBeenCalledWith(todos[0].id)
    })

    test('it edits todo', async () => {
        let todos = [
            {id:1, content: 'testing q'}
        ]
        const editTodo = jest.fn()
        const {container, getByTestId, findByTestId} = render(<Main todos={todos} editTodo={editTodo}/>)
        const editIcon = getByTestId('edit-icon')
        const input = container.querySelector('input')
        const submitBtn = getByTestId('add-button')
        expect(submitBtn).toHaveTextContent('Add New Todo')
        expect(input.value).toBe('')

        fireEvent.click(editIcon)
        expect(editTodo).toHaveBeenCalled()
        expect(editTodo).toHaveBeenCalledTimes(1)
        expect(editTodo).toHaveBeenCalledWith(todos[0].id)


    })
})