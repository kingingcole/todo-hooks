import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import AddTodoSection from './AddTodoSection'

afterEach(cleanup)

describe('add todo section test', () => {

    test('it displays button correctly', () => {
        const {container, getByText, getByTestId, getByPlaceholderText} = render(<AddTodoSection />)
        const input = getByPlaceholderText('What have you got planned?');
        const button = getByTestId("add-button");

        expect(button).toHaveTextContent('Add New Todo');
        expect(button).toBeDisabled()
    });

    test('button displays correct text', () => {
        const todoInputText = 'editing todo';
        const {container, getByText, getByTestId, getByPlaceholderText} = render(<AddTodoSection isEditingTodo={true} todoInputText={todoInputText}/>)
        const button = getByTestId("add-button");
        const input = getByPlaceholderText('What have you got planned?');

        expect(button).toHaveTextContent('Save Edit');
        expect(button).not.toBeDisabled();
        expect(input.value).toBe(todoInputText)
    })

    test('it submits todo', () => {
        const addTodo = jest.fn()
        const {container, getByText, getByTestId, getByPlaceholderText} = render(<AddTodoSection addTodo={addTodo} isEditingTodo={false}/>)
        const newTodo = 'Go to school';
        const button = getByTestId("add-button");
        const form = container.querySelector('form')
        const input = getByPlaceholderText('What have you got planned?');
        input.value = newTodo
        fireEvent.change(input)
        fireEvent.submit(form)
        expect(input.value).toBe('')
        expect(addTodo).toHaveBeenCalledTimes(1)
    })
})