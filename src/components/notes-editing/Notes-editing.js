import { Component } from 'react';

import './notes-editing.scss';



class NotesEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        const {notesEditing, offNotesEditing} = this.props; // диструктурием свойства, которые пришли из props

        return (
            <div className={notesEditing}>
                <button 
                    className="notes-editing__btn-back" 
                    onClick={() => {offNotesEditing(); }}></button>
                <button 
                    className="notes-editing__btn-save"></button>
                <textarea 
                    className="notes-editing__title" 
                    placeholder="Title editing" 
                    type="text"></textarea>
                <textarea 
                    className="notes-editing__description" 
                    placeholder="Type something..." 
                    type="text"></textarea>
            </div>
        )
    }
}

export default NotesEditing;