import { Component } from 'react';

import './buttons-edit.scss';



class ButtonsEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    // Метод: чтобы запускать эти методы при одном клике
    severalClick = () => {
        const {transferTitle, transferDescription, onNotesEditing} = this.props; // диструктурием свойства, которые пришли из props
        transferTitle();
        transferDescription();
        onNotesEditing();
    };



    render() {
        const {onDelete, buttonsEdit} = this.props; // диструктурием свойства, которые пришли из props

        return (
            <div className={buttonsEdit}>
                <button 
                    className="buttons-edit__edit"
                    onClick={this.severalClick}></button>

                <button 
                    className="buttons-edit__delete" 
                    onClick={onDelete}></button>
            </div>
        )
    }
}

export default ButtonsEdit;