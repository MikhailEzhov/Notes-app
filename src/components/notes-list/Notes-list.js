import { Component } from 'react';
import NotesListItem from '../notes-list-item/Notes-list-item';

import './notes-list.scss';


class NotesList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <ul className="notes-list">
                <NotesListItem/>
                <NotesListItem/>
                <NotesListItem/>
            </ul>
        )
    }
}

export default NotesList;