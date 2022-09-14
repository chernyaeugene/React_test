import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {id: 1, completed: false, title: 'Купить пирог'},
        {id: 2, completed: false, title: 'Купить сыр'},
        {id: 3, completed: false, title: 'Купить газетy'},
        {id: 4, completed: false, title: 'Купить селезенку'},

    ]

  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>
        <TodoList nameArray={todos}/>
    </div>
  );
}

export default App;
