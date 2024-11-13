import React from 'react';
import '../pages/Todolist.css';

function TodoItem(props) {

    return(
        <div className="todo-item">
            {props.item}
            <button className="delete-button" onClick={props.onDelete}>삭제</button>
        </div>
    )
}

export default TodoItem;