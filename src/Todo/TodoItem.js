import React from "react";
import PropTypes from "prop-types";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 2px',
        border: 'solid 1px black',
        borderRadius: '4px',
        marginBottom: '5px'
    }

}
 function TodoItem({ liElement, index }) {
    return(

        <li style={styles.li}>
            <span>
                <input type="checkbox"/>
                <strong>{index +1}</strong>
                {liElement.title}
            </span>
            <button>&times;</button>
        </li>
    )
}


TodoItem.propTypes = {
     liElement: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}
export default TodoItem