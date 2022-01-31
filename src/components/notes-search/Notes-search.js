import { Component } from 'react';

import './notes-search.scss';



class NotesSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            termSearch: '', // пусто
        }
    }



    // Локальный метод: что ввели, устанавливается в состояние и это состояние поднимается в App:
    onUpdateSearch = (e) => {
        const termSearch = e.target.value;
        this.setState({termSearch: termSearch}); // устанавливаем новое состояние в этом компоненте
        // поднимаем состояние наверх и передаёт аргумент:
        this.props.onUpdateSearch(termSearch); // - пришло из другого компонента
    }
    //==================================================



    render() {
        const {notesSearch, offNotesSearch} = this.props; // диструктурируем свойства, которые пришли из props

        return (
            <div className={notesSearch}>
                <input 
                    type="text"
                    className="notes-search__input"
                    placeholder="Search by the keyword..."
                    value={this.state.termSearch}
                    onChange={this.onUpdateSearch}/>
                <button className="notes-search__btn-exit" onClick={() => offNotesSearch()}></button>
            </div>
            
        )
    }
}

export default NotesSearch;