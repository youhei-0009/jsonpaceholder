import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const onClickUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    })
    .catch((err) => {console.log(err)});
  }
  const onClickUsers1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((res) => {
      console.log(res.data);
    })
    .catch((err) => {console.log(err)});
  }

  return (
    <>
      <div className='App'>
        <button onClick={onClickUsers}>users</button>
        <button onClick={onClickUsers1}>users Id=1</button>
      </div>
    </>
  );
}

export default App;
