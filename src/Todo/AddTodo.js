import React, { useState } from "react";
import PropTypes from "prop-types";
function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
    return (
        <form className={'form'} onSubmit={submitHandler}>
            <input className={'inputAdd'} value={value} onChange={event => setValue(event.target.value)}/>
            <button type={"submit"} className={'addItem'}>Добавить Проблем</button>
        </form>
    )
}
// onSubmit={submitHandler} оброботчик событий для формы
// value={value} - значение в input
// onChange={event => setValue(event.target.value)} - следим за значением в input
// event.preventDefault() -чтобы страница не перезагружалась
// function submitHandler(event) - ф-я нужна чтобы проверять значение value и если оно заполнено активировать ф-ю onCreate(value)
// onCreate(value) - обращаемся к свойству onCreate если в value есть что-то и переда
// AddTodo({onCreate}) - принимаем {onCreate} как параметр компонента AddTodo ()
// setValue('') - обнуляет значение value

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo
