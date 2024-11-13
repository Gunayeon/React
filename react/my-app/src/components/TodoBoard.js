import React from 'react';
import TodoItem from './TodoItem';
import '../pages/Todolist.css';

function TodoBoard(props) {

    // console.log("todoBoard",props.todoList)
    return (
        <div>
            <h1 className="title">Todo List</h1>
            {props.todoList.map((item, index)=>(
                <TodoItem 
                    key={index}
                    item={item}
                    onDelete={() => props.deleteItem(index)}/>))}
        </div>
    );
};
export default TodoBoard;