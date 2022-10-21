import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

// useContext - хук позволяет передавать в приложение и получать доступ к данным сквозь компоненты

const styles = {
    strong: {
        marginRight: '10px'
    }

}
 function TodoItem({ todo, index, onChange }) {
     const {removeTodo} = useContext(Context)
     // получаем доступ к ф-и removeTodo с помощью useContext(Context)

     const classes = []

     if (todo.completed) {
         classes.push('done')
     } // - добавляем класс done в const classes

    return(
        <li className={'listItem'}>
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       checked={todo.completed}
                       className={'input_stl'}
                       onChange={() => onChange(todo.id)}/>
                <strong style={styles.strong}>{index +1}</strong>
                {todo.title}
            </span>
            <button className={'radiusBtn'} onClick={removeTodo.bind(null, todo.id)}>
                &times;
            </button>
        </li>
    )
}



// useContext - хук позволяет передавать в приложение и получать доступ к данным сквозь компоненты
// { todo, index, onChange } - входные данные
// classes.join(' ') - масив со значением done конвертируем в строку тоесть задаем класс - done
// onChange(todo.id) - событие показывает по какому id нажимаем
// onClick={removeTodo.bind(null, todo.id) - при нажатии вызывается ф-я removeTodo отложено. bind(null - неважный параметр

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default TodoItem