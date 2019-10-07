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
        
        <CardItem data-testid='todo-list'>
            <div className="row">
                <div className="col-8">
                    <TodoText data-testid='todo-content' style={{ textDecoration: todo.isChecked ? "line-through" : "" }}>
                        <span data-testid="checkbox" onClick={() => completeTodo(todo.id)}>
                            {todo.isChecked ?
                                <CheckSquare style = {{marginRight: "5%"}} />
                                :
                                <Square style = {{marginRight: "5%"}}/>
                            }
                        </span>
                        {todo.content}
                        </TodoText>
                </div>
                <div className="col-4 text-right">
                    <EditIcon onClick={() => editTodo(todo.id)} data-testid='edit-icon'><FontAwesomeIcon icon="pencil-alt"/></EditIcon>
                    <TrashIcon onClick={handleClick} data-testid='delete-todo'><Trash2/></TrashIcon>
                </div>
            </div>
        </CardItem>
    )
};

export default TodoList