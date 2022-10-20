import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
// Context - хук нужен чтобы проносить сквозь компоненты

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

    function removeTodo (id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    // removeTodo - ф-я для удаления елемента


    return (
      <Context.Provider value={{removeTodo}}>
          <div className='wrapper'>
              <h1>React Tutorial</h1>
              <AddTodo />
              {todos.length ? <TodoList todos={todos} someThing={thingSome}/> : <p>Life is Good!</p>}
                  {/*thingSome=someThing=onChange=onChange(todo.id) - протаскиваем onChange от дочерних к материнским компонентам */}
            {/*используется условный оператор ? если длина true - выполняем TodoList, если false - <p>  */}


          </div>
      </Context.Provider>
    // Context.Provider - с его помощью передаем ф-и или значения сквозь компоненты
    // value - в этом свойстве передаем ф-ю или значение сквозь компоненты
  );

}
export default App;
