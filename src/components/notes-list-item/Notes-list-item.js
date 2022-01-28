import { Component } from 'react';
import ButtonsEdit from '../buttons-edit/Buttons-edit';

import './notes-list-item.scss';


class NotesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsEdit: 'buttons-none'    // начальное состояние выключенное
        }
    }

    onButtons = () => {                      // меняет состояние на противоположное, для показа кнопок
        this.setState((state) => ({
            buttonsEdit: !state.buttonsEdit
        }))
    }



    render() {
        const {title, description, onDelete} = this.props;    // диструктурируем свойства из props
        const {buttonsEdit} = this.state;           // диструктурируем состояния из state

        return (
            <li className="notes-item" onClick={this.onButtons}>
                <ButtonsEdit onDelete={onDelete} buttonsEdit={buttonsEdit ? 'buttons-none' : 'buttons-edit'}/>
                <h2 className="notes-item__title">{title}</h2>
                <p className="notes-item__description">{description}</p>
            </li>
        )
    }
}

export default NotesListItem;