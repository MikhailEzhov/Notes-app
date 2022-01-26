import { Component } from 'react';

import './notes-search.scss';

class NotesSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <input type="text"
            className="notes-search"
            placeholder="Найти"/>
        )
    }
}

export default NotesSearch;