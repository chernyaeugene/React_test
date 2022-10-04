import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить пирог'},
        {id: 2, completed: false, title: 'Купить сыр'},
        {id: 3, completed: false, title: 'Купить газетy'},
        {id: 4, completed: false, title: 'Купить селезенку'}
    ])

    function thingSome(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }
  return (
    <div className='wrapper'>
      <h1>React Tutorial</h1>
        <TodoList todos={todos}
                  someThing={thingSome}/>
    </div>
  );
}
// work={todos} название св-а со значением todos - массива
export default App;
