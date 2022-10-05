import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: '5px',
        border: '1px solid black',
        borderRadius: '4px'
    },
}
 function TodoList(props) {
     // props - входные данные. Связан смассивом nameArray
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo}
                                 key={todo.id}
                                 index={index}
                                 onChange={props.someThing}/>
                // цикл - перебераем массив чтоб вывести Li
                // key={todo.id} - нужен чтобы помоч React индетеф наш массив
                // index={index} - ставим перед нашим Li номер строки
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    someThing: PropTypes.func.isRequired
}

export default TodoList