import React from 'react'
import styled from 'styled-components'
import { Trash2, Square } from 'react-feather';

const CardItem = styled.div`
    background: #eee;
   padding: 10px 10px;
   margin-bottom: 10px;
   border-radius: 4px
`;

const TodoText = styled.p`
    font-weight: 500
    margin-bottom: 0;
    color: black;
    &:hover,
    &:active {color: gray}
`;

const TrashIcon = styled.span`
    color: #f1a9a0;
    cursor: pointer;
    transition: 0.3s color;
    &:hover,
    &:active {color: #cf000f} 
`

const TodoList = ({todo, deleteTodo}) => {
    const handleClick = () => {
        deleteTodo(todo.id)
    }

    return (
        <CardItem>
            <div className="row">
                <div className="col-10">
                    <TodoText><Square/> {todo.content}</TodoText>
                </div>
                <div className="col-2 text-right">
                    <TrashIcon><Trash2 onClick={handleClick}/></TrashIcon>
                </div>
            </div>
        </CardItem>
    )
};

export default TodoList