import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import TodoList from './TodoList'

afterEach(cleanup)


describe('todo lists test', () => {
    let todo = {id: 1, content:'test todo'}
    let deleteTodo = jest.fn()
    let completeTodo = jest.fn()
    test('it deletes todo', () => {
        const {container, getByTestId} = render(<TodoList todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>)
        const deleteBtn = getByTestId('delete-todo')
        const checkbox = getByTestId('checkbox')
        const todoContent = getByTestId('todo-content')
        fireEvent.click(deleteBtn)
        expect(deleteBtn).toBeInTheDocument()
        expect(todoContent).toHaveTextContent(todo.content)
        expect(deleteTodo).toHaveBeenCalledTimes(1)
        expect(deleteTodo).toHaveBeenCalledWith(todo.id)

    })
})