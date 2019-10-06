import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import AddTodoSection from './AddTodoSection'

describe('add todo section test', () => {
    const newTodo = 'Go to school';
    const addTodo = jest.fn()
    const {container, getByText, getByTestId, getByPlaceholderText} = render(<AddTodoSection addTodo={addTodo} isEditingTodo={false}/>)
    const button = getByTestId("add-button");
    const form = container.querySelector('form')
    const input = getByPlaceholderText('What have you got planned?');

    test('it displays button correctly', () => {
        expect(button).toHaveTextContent('Add New Todo');
        expect(button).toBeDisabled()
    });

    test('it submits todo', () => {
        input.value = newTodo
        fireEvent.change(input)
        fireEvent.click(button)
        // expect(input.value).toBe('')
        expect(addTodo).toHaveBeenCalledTimes(1)
    })
})