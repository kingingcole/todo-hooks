import React from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'

const TDS = styled.div` 
`

const TodoSection = ({todos, deleteTodo}) => {

    if (!todos || todos.length === 0) {
        return(
            <p className={`text-center`}>No todos</p>
        )
    }

    return(
        <TDS>
            {todos && todos.map(todo => {
                return <TodoList todo={todo} deleteTodo={deleteTodo} key={todo.id}/>
            })}
        </TDS>
    )
};

export default TodoSection