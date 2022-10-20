import React from "react";

function AddTodo() {
    return (
        <form className={'form'}>
            <input className={'inputAdd'}/>
            <button type={"submit"} className={'addItem'}>Добавить Проблем</button>
        </form>
    )
}

export default AddTodo