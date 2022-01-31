import { Component } from 'react';

import './notes-add.scss';



class NotesAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', // начальное пустое
            description: '' // начальное пустое
        }
    }



    // Локальный метод: меняет state, исходя что ввели в textarea:
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // ориентируется на атрибут name
        })
    }
    //==================================================



    // Локальный метод для создания нового экземпляра:
    onNewCreate = () => {
        if (this.state.title.length < 1) return; // проверка, чтобы не добавлять пустые заметки
        // поднимаем состояние наверх и передаёт аргументы:
        this.props.onAdd(this.state.title, this.state.description); // - пришло из другого компонента
        this.setState({
            title: '',
            description: ''
        })
    }
    //==================================================



    render() {
        const {notesAdd, offNotesAdd} = this.props; // диструктурируем свойства, которые пришли из props
        const {title, description} = this.state; // диструктурируем состояния из state

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