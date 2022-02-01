import { Component } from 'react';

import './notes-editing.scss';



class NotesEditing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', // начальное пустое
            description: '', // начальное пустое
        }
    }



    // Локальный метод: меняет state, исходя что ввели в textarea:
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // ориентируется на атрибут name
        })
    }
    //==================================================



    // Локальные методы: сбрасывают состояния
    resetStateTitle = () => {
		this.setState(title => ({
			title: ''
		}))
	}
    resetStateDescription = () => {
		this.setState(description => ({
			description: ''
		}))
	}
    //==================================================



    render() {
        const {notesEditing, offNotesEditing, currentTitle, currentDescription, onNewTitleDescription} = this.props; // диструктурием свойства, которые пришли из props
        const {title, description} = this.state; // диструктурируем состояния из state

        // функция для сброса формы
        function cancelCourse() {
            document.getElementById("create-course-form").reset();
        }

        return (
            <form className={notesEditing} id='create-course-form'>
                <button 
                    className="notes-editing__btn-back" 
                    onClick={(e) => {e.preventDefault(); onNewTitleDescription(title, description); 
                        cancelCourse();  offNotesEditing(); this.resetStateTitle(); this.resetStateDescription(); }}></button>
                <button 
                    className="notes-editing__btn-save"></button>
                <textarea 
                    className="notes-editing__title" 
                    placeholder="Title editing" 
                    type="text"
                    name="title"  // name нужен чтобы метод на него ориентировался
                    defaultValue={currentTitle}
                    value={this.defaultValue}
                    onChange={this.onValueChange}></textarea>
                <textarea 
                    className="notes-editing__description" 
                    placeholder="Type something..." 
                    type="text"
                    name="description"  // name нужен чтобы метод на него ориентировался
                    defaultValue={currentDescription}
                    value={this.defaultValue}
                    onChange={this.onValueChange}></textarea>
            </form>
        )
    }
}

export default NotesEditing;