import React from "react";
import PropTypes from "prop-types";

const styles = {
    strong: {
        marginRight: '10px'
    }

}
 function TodoItem({ todo, index, onChange }) {
     // { work, index, onChange } - входные данные
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
            <button className={'radiusBtn'}>&times;</button>
        </li>
    )
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
export default TodoItem