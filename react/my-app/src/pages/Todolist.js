import React, {useState} from 'react';
import './Todolist.css';
import TodoBoard from '../components/TodoBoard';

// 1. 인풋창이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다. -> array
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다
const Todolist = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] =useState([]);
    const addItem= () => {
        setTodoList([...todoList,inputValue])
    }

    const deleteItem = (index) => {
      const newList =todoList.filter((_,i)=> i!==index);
      setTodoList(newList);
    }

    return (
      <main>
         <input value={inputValue} type ="text" onChange={(event) => setInputValue(event.target.value)}
         placeholder="할 일을 입력하세요"/>
            <button onClick={addItem}>추가</button>

            <TodoBoard todoList={todoList} deleteItem={deleteItem} />

      </main>
    );
};

export default Todolist;
