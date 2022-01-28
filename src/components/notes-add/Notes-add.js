import { Component } from 'react';

import './notes-add.scss';


class NotesAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    // метод динамически меняет state, исходя что ввели в textarea:
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // метод для добавления нового
    onNewCreate = () => {
        if (this.state.title.length < 1) return; // проверка, чтобы не добавлять пустые заметки
        this.props.onAdd(this.state.title, this.state.description);
        this.setState({
            title: '',
            description: ''
        })
    }
    
    render() {
        const {notesAdd, offNotesAdd} = this.props;    // диструктурировали свойства, которые пришли из props
        const {title, description} = this.state;         // диструктурируем состояния из state

        return (
            <div className={notesAdd}>
                <button 
                    className="notes-add__btn-back" 
                    onClick={() => offNotesAdd()}></button>
                <button 
                    className="notes-add__btn-save"
                    onClick={this.onNewCreate}></button>
                <textarea className="notes-add__title" 
                    placeholder="Title" 
                    type="text"
                    name="title"  // name нужен чтобы метод на него ориентировался
                    value={title}  // в value записывается значение, которое вводится в textarea
                    onChange={this.onValueChange}></textarea>
                <textarea className="notes-add__description" 
                    placeholder="Type something..." 
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onValueChange}></textarea>
            </div>
        )
    }
}

export default NotesAdd;