import React, {useState} from 'react';
import './App.css';

function Todo ({todo, index}) {
  return (
  <div className="todo">{todo.text} </div>
  )
}

 function App() {
  const [todos, settodos] = useState([
    {
      text:'Learn react',
      complelted: false
    },
    {
      text:'Learn angular',
      complelted: false
    },
    {
      text:'Learn redux',
      complelted: false
    }
  ]);

  return (<div className="app"> 
    <div className="todo-list">
      {todos.map((todo, index) => <Todo key={index} index={index} todo={todo} />)}
    </div>
  </div>);
}

export default App;
