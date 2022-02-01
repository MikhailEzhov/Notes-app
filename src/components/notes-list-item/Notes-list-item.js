import { Component } from 'react';

import ButtonsEdit from '../buttons-edit/Buttons-edit';

import './notes-list-item.scss';



class NotesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsEdit: 'buttons-none' // скрыто
        }
    }



    // Локальный метод: меняет состояние на противоположное для ButtonsEdit
    onButtons = () => { 
        this.setState((state) => ({
            buttonsEdit: !state.buttonsEdit
        }))
    }
    //==================================================



    render() {
        const {title, description, onDelete, onNotesEditing, transferTitle, transferDescription} = this.props; // диструктурием свойства, которые пришли из props
        const {buttonsEdit} = this.state; // диструктурируем состояния из state

        return (
            <li className="notes-item" onClick={this.onButtons}>

                <ButtonsEdit
                    onDelete={onDelete} 
                    buttonsEdit={buttonsEdit ? 'buttons-none' : 'buttons-edit'}
                    onNotesEditing={onNotesEditing}
                    transferTitle={transferTitle}
                    transferDescription={transferDescription}/>

                <h2 className="notes-item__title">{title}</h2>
                <p className="notes-item__description">{description}</p>
            </li>
        )
    }
}

export default NotesListItem;