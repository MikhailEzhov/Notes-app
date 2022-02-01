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
        const {data, onDelete, onNotesEditing, transferTitle, transferDescription} = this.props; // диструктурием свойства, которые пришли из props

        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            const {title} = item; // for transferTitle
            const {description} = item; // for transferDescription
            return (
                <NotesListItem 
                    key={id} 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onNotesEditing={onNotesEditing}
                    transferTitle={() => transferTitle(title)}
                    transferDescription={() => transferDescription(description)}/>
            )
        })

        return (
            <ul className="notes-list">
                {elements}
            </ul>
        )
    }
}

export default NotesList;