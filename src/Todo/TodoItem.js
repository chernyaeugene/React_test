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
     // { work, index, onChange } - входные данные
     const {removeTodo} = useContext(Context)
     // получаем доступ к ф-и removeTodo с помощью useContext(Context)

     const classes = []

     if (todo.completed) {
         classes.push('done')
     } // - добавляем класс done в const classes

    return(
        <li className={'listItem'}>
            <span className={classes.join(' ')}>
                {/*//*classes.join(' ') - масив со значением done конвертируем в строку тоесть задаем класс - done*/}
                <input type="checkbox"
                       checked={todo.completed}
                       className={'input_stl'}
                       onChange={() => onChange(todo.id)}/>
                {/*onChange(todo.id)} - событие показывает по какому id нажимаем */}
                <strong style={styles.strong}>{index +1}</strong>
                {todo.title}
            </span>
            <button className={'radiusBtn'} onClick={removeTodo.bind(null, todo.id)}>
                &times;
            </button>
            {/*onClick={removeTodo.bind(null, todo.id)} - при нажатии вызывается ф-я removeTodo отложено. bind(null - неважный параметр */}
        </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default TodoItem