
import { useState } from 'react';
import './App.css'

import { useDispatch } from 'react-redux';

import { addTodo } from './redux/todoSlice';
import TodoList from './Todos';
import UserDetailsComp from './UserDetails';




function App() {


  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');


  const addOnSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue)
    // dispatch takes in an action which takes in an object with a payload
    dispatch(addTodo({ title: inputValue }))
  };

  return (
    <div>
      <h1>
        Todolist
      </h1>
      <form
        onSubmit={addOnSubmit}
      >
        <input type='text' onChange={(e) => setInputValue(e.target.value)} />
        <button type='submit' >add</button>
      </form>
      <TodoList />
      <UserDetailsComp/>
    </div>
  )
}

export default App
