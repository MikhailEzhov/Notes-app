import { Component } from 'react';

import './notes-list-item.scss';


class NotesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <li className="notes-item">
                <h2 className="notes-item__title">Заголовок</h2>
            </li>
        )
    }
}

export default NotesListItem;