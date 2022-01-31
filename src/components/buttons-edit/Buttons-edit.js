import { Component } from 'react';

import './buttons-edit.scss';



class ButtonsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        const {onDelete, buttonsEdit, onNotesEditing} = this.props; // диструктурием свойства, которые пришли из props

        return (
            <div className={buttonsEdit}>
                <button 
                    className="buttons-edit__edit" 
                    onClick={() => {onNotesEditing(); }}></button>

                <button 
                    className="buttons-edit__delete" 
                    onClick={onDelete}></button>
            </div>
        )
    }
}

export default ButtonsEdit;