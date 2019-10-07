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

    test('it displays clear all button', () => {
        let todos = [
            {id:1, content: 'testing q'},
            {id:2, content: 'testing q'},
            {id:3, content: 'testing q'}
        ]
        const {container, getByText} = render(<Main todos={todos}/>)
        const clearAllBtn = getByText('Clear All Todos')
        expect(clearAllBtn).toBeInTheDocument()
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

        const newTodoList = await waitForElement(() => {
            getByText(newTodo)
        })

        expect(addTodo).toHaveBeenCalledTimes(1)
        expect(addTodo).toHaveBeenCalledWith(newTodo)
        expect(newTodoList).toBeInTheDocument()
    })

    test('it deletes todo', async () => {
        let todos = [
            {id:1, content: 'testing q'}
        ]
        const deleteTodo = jest.fn()
        const {container, getByTestId} = render(<Main todos={todos} deleteTodo={deleteTodo}/>)
        const deleteBtn = getByTestId('delete-todo')
        fireEvent.click(deleteBtn)
        expect(deleteTodo).toHaveBeenCalledTimes(1)
        expect(deleteTodo).toHaveBeenCalledWith(todos[0].id)
        expect(await waitForElement(() => getByTestId('empty-todo-container'))).toBeInTheDocument()
    })
})