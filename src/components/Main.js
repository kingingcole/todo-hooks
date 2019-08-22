import React from 'react';
import TodoSection from './TodoSection'
import AddTodoSection from './AddTodoSection'


<<<<<<< HEAD
const Main = ({todos,
                  deleteTodo,
                  addTodo,
                  clearTodos,
                  todoInputText,
                  isEditingTodo,
                  editTodo,
                  saveEdit}) => {
=======
const Main = ({todos, deleteTodo, addTodo, completeTodo, clearTodos}) => {
>>>>>>> 497597542a383e09d5ddb53b8ac36ea8c03d5b19
    return(
        <div className="container my-4">
            <div className="row mt-5">
                <div className="col-lg-7 col-sm-12">
<<<<<<< HEAD
                    <TodoSection todos={todos} deleteTodo={deleteTodo} clearTodos={clearTodos} editTodo={editTodo}/>
=======
                    <TodoSection todos={todos} deleteTodo={deleteTodo} clearTodos={clearTodos} completeTodo={completeTodo}/>
>>>>>>> 497597542a383e09d5ddb53b8ac36ea8c03d5b19
                </div>
                <div className="col-lg-5 col-sm-12">
                    <AddTodoSection addTodo={addTodo} todoInputText={todoInputText} isEditingTodo={isEditingTodo} saveEdit={saveEdit}/>
                </div>
            </div>
        </div>
    )
};

export default Main