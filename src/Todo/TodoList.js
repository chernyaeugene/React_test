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
    li: {
        display: 'flex',
    }
}
 function TodoList(props) {
    return (
        <ul style={styles.ul}>
            { props.nameArray.map((item, num) => {
                return <TodoItem liElement={item} key={item.id} index={num}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    nameArray: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList