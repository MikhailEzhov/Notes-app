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
        const {data, onDelete} = this.props;         // диструктурируем свойство из props


        const elements = data.map((item, index) => {
            return (
                <NotesListItem key={index} 
                {...item}
                onDelete={() => onDelete(index)}/>
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