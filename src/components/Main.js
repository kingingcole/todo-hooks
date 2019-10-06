import React from 'react';
import TodoSection from './TodoSection'
import AddTodoSection from './AddTodoSection'


const Main = ({
                  todos,
                  deleteTodo,
                  addTodo,
                  clearTodos,
                  todoInputText,
                  isEditingTodo,
                  editTodo,
                  completeTodo,
                  saveEdit
              }) => {
    return (
        <div className="container my-4">
            <div className="row mt-5">
                <div className="col-lg-7 col-sm-12">
                    <TodoSection todos={todos} deleteTodo={deleteTodo} clearTodos={clearTodos} editTodo={editTodo}
                                 completeTodo={completeTodo}/>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <AddTodoSection addTodo={addTodo} todoInputText={todoInputText} isEditingTodo={isEditingTodo}
                                    saveEdit={saveEdit}/>
                </div>
            </div>
        </div>
    )
};

export default Main