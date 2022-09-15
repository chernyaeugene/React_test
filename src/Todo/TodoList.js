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
            { props.nameArray.map((item, num) => {
                return <TodoItem liElement={item} key={item.id} index={num}/>
                // цикл - перебераем массив чтоб вывести Li
                // key={item.id} - нужен чтобы помоч React индетеф наш массив
                // index={num} - ставим перед нашим Li номер строки
            })}
        </ul>
    )
}

TodoList.propTypes = {
    nameArray: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList