import { Component } from 'react';

import './notes-edit.scss';


class NotesEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        const {notesEdit, offNotesEdit} = this.props;    // диструктурировали свойства, которые пришли из props

        return (
            <div className={notesEdit}>
                <button className="notes-edit__btn-back" onClick={() => offNotesEdit()}></button>
                <br/>
                <textarea className="notes-edit__title" placeholder="Title" type="text"></textarea>
                <textarea className="notes-edit__description" placeholder="Type something..." type="text"></textarea>
            </div>
        )
    }
}

export default NotesEdit;