import React from 'react';
import TodoSection from './TodoSection'
import AddTodoSection from './AddTodoSection'


const Main = ({todos, deleteTodo, addTodo, completeTodo, clearTodos}) => {
    return(
        <div className="container my-4">
            <div className="row mt-5">
                <div className="col-lg-7 col-sm-12">
                    <TodoSection todos={todos} deleteTodo={deleteTodo} clearTodos={clearTodos} completeTodo={completeTodo}/>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <AddTodoSection addTodo={addTodo}/>
                </div>
            </div>
        </div>
    )
};

export default Main