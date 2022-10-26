import React, {Fragment} from "react";
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <Fragment>
                <button className={'opn_btn'} onClick={() => this.setState({isOpen: true})}>Открыть Окно</button>
                {this.state.isOpen && (
                        <div className={'modal'}>
                            <div className={'modal_body'}>
                                <h1>Modal tittle</h1>
                                <p>Some Txt</p>
                                <button onClick={() => this.setState({isOpen: false})}>Закрыть окно</button>
                            </div>
                        </div>
                    )
                }
            </Fragment>
        )
    }
}