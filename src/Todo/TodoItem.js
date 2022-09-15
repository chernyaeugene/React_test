import React from "react";
import PropTypes from "prop-types";

const styles = {
    strong: {
        marginRight: '10px'
    }

}
 function TodoItem({ liElement, index }) {
     // { liElement, index } - входные данные
    return(

        <li className={'listItem'}>
            <span>
                <input type="checkbox" className={'input_stl'}/>
                <strong style={styles.strong}>{index +1}</strong>
                {liElement.title}
            </span>
            <buttRon className={'radiusBtn'}>&times;</buttRon>
        </li>
    )
}


TodoItem.propTypes = {
     liElement: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}
export default TodoItem