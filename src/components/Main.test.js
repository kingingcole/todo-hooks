import React from 'react'
import {render, fireEvent, waitForElement} from '@testing-library/react'
import Main from './Main'

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
        const {container, getByTestId} = render(<Main addTodo={addTodo}/>)

        const newTodo = 'New todo to add'

        const inputField = container.querySelector('input')
        const form = container.querySelector('form')
        const submitBtn = getByTestId('add-button')

        inputField.value = newTodo
        fireEvent.submit(form)
        expect(addTodo).toHaveBeenCalledTimes(1)

        const newTodoList = await waitForElement(() => {
            getByTestId('todo-list')
        })
        expect(newTodoList).toBeInTheDocument()
    })
})