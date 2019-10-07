import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import TodoSection from './TodoSection'
import Main from "./Main.test";

afterEach(cleanup)


test('it displays no todos with empty todos list', () => {
    const {getByText, getByTestId, findByText} = render(<TodoSection todos={[]}/>);
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


test('it displays clear all button', () => {
    let todos = [
        {id:1, content: 'testing q'},
        {id:2, content: 'testing q'},
        {id:3, content: 'testing q'}
    ]
    const {container, getByText} = render(<TodoSection todos={todos}/>)
    const clearAllBtn = getByText('Clear All Todos')
    expect(clearAllBtn).toBeInTheDocument()
})
