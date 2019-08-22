import React from 'react'
import styled from 'styled-components'
import { Trash2, Square, CheckSquare } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    margin: 0 2px;
    &:hover,
    &:active {color: #cf000f} 
`;

const EditIcon = styled.span`
    margin: 0 2px;
    color: #22313f;
    cursor: pointer;
    transition: 0.3s color;
    &:hover,
    &:active {color: #1f3a93} 
`;

const TodoList = ({todo, deleteTodo, editTodo, id, completeTodo}) => {
    const handleClick = () => {
        deleteTodo(todo.id)
    }
    
    return (
        
        <CardItem>
            <div className="row">
                <div className="col-10">
                    <TodoText style={{ textDecoration: todo.isChecked ? "line-through" : "" }}>
                        {todo.isChecked ?
                        <CheckSquare style = {{marginRight: "5%"}} onClick={() => completeTodo(todo.id)}/> 
                        :
                        <Square style = {{marginRight: "5%"}} onClick={() => completeTodo(todo.id)}/> 
                        }
                        {todo.content}
                        </TodoText>
                </div>
                <div className="col-4 text-right">
                    <EditIcon><FontAwesomeIcon icon="pencil-alt" onClick={() => editTodo(id)}/></EditIcon>
                    <TrashIcon><Trash2 onClick={handleClick}/></TrashIcon>
                </div>
            </div>
        </CardItem>
    )
};

export default TodoList