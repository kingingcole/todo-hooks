import React from 'react';
import styled from 'styled-components'
import TodoSection from './TodoSection'
import AddTodoSection from './AddTodoSection'


const Main = ({todos, deleteTodo, addTodo}) => {
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-7 col-sm-12">
                    <TodoSection todos={todos} deleteTodo={deleteTodo}/>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <AddTodoSection addTodo={addTodo}/>
                </div>
            </div>
        </div>
    )
};

export default Main