import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить пирог'},
        {id: 2, completed: false, title: 'Купить сыр'},
        {id: 3, completed: false, title: 'Купить газетy'},
        {id: 4, completed: false, title: 'Купить селезенку'}
    ])
    // useState - ф-я отслеживает и рендерит масив.
    //     todos - дефолтное состояние масива.
    //     setTodos  - ф-я позволяющая изменять масив.
    function thingSome(id) {
        // thingSome - ф-я меняет свойстов completed
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
        {/*thingSome=someThing=onChange=onChange(todo.id) - протаскиваем onChange от дочерних к материнским компонентам */}
    </div>
  );
}
export default App;
