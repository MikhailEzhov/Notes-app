import { Component } from 'react';

import './notes-search.scss';

class NotesSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {notesSearch, offNotesSearch} = this.props;    // диструктурировали свойства, которые пришли из props

        return (
            <div className={notesSearch}>
                <input type="text"
                className="notes-search__input"
                placeholder="Search by the keyword..."/>
                <button className="notes-search__btn-exit" onClick={() => offNotesSearch()}></button>
            </div>
            
        )
    }
}

export default NotesSearch;