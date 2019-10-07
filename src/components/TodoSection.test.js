import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import TodoSection from './TodoSection'

afterEach(cleanup)


test('it displays no todos with empty todos list', () => {
    const {getByText, getByTestId} = render(<TodoSection todos={[]}/>);
    expect(getByTestId('empty-todo-container')).toBeInTheDocument()
    expect(getByTestId('empty-todo-container')).toHaveTextContent('No todos')
});


test('it displays list of todos', () => {
    const todos = [
        {id: 1, content: 'Hello'},
        {id: 2, content: 'Hey'},
        {id: 2, content: 'Hey'},
    ]
    const {getByText, getByTestId, getAllByTestId} = render(<TodoSection todos={todos}/>);
    expect(getByTestId('todo-section')).toBeInTheDocument()
    expect(getByText('Clear All Todos')).toBeInTheDocument()
    expect(getAllByTestId('todo-list').length).toBe(todos.length)
});
