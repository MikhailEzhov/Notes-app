import { Component } from 'react';

import './buttons-edit.scss';


class ButtonsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {buttonsEdit, onDelete} = this.props;    // диструктурируем свойства из props

        return (
            <div className={buttonsEdit}>
                <button className="buttons-edit__edit"></button>
                <button className="buttons-edit__delete" onClick={onDelete}></button>
            </div>
        )
    }
}

export default ButtonsEdit;