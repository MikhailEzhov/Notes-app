import { Component } from 'react';

import NotesList from '../notes-list/Notes-list';
import NotesAdd from '../notes-add/Notes-add';
import NotesEditing from '../notes-editing/Notes-editing';

import './app-main.scss';



class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesAdd: 'add-none', // скрыто
            notesEditing: 'editing-none', // скрыто
        }
    }



    // Локальный метод для показа NotesAdd
    onNotesAdd = () => {
        window.scrollTo(0,0); // прокручию в самый верх
		this.setState(notesAdd => ({
			notesAdd: 'notes-add'
		}))
	}
    // Локальный метод для скрытия NotesAdd
    offNotesAdd = () => {     
		this.setState(notesAdd => ({
			notesAdd: 'add-none'
		}))
	}
    //==================================================



    // Локальный метод для показа NotesEditing
    onNotesEditing = () => {
        window.scrollTo(0,0); // прокручию в самый верх
		this.setState(notesEditing => ({
			notesEditing: 'notes-editing'
		}))
	}
    // Локальный метод для скрытия NotesEditing
    offNotesEditing = () => {     
		this.setState(notesEditing => ({
			notesEditing: 'editing-none'
		}))
	}
    //==================================================



    render() {
        const {data, deleteItem, onAdd, transferTitle, transferDescription, 
            currentTitle, currentDescription, onNewTitleDescription} = this.props; // диструктурием свойства, которые пришли из props
        const {notesAdd, notesEditing} = this.state; // диструктурируем состояния из state

        return (
            <main className="main">
                <div className="container">

                    {/* список */}
                    <NotesList 
                        data={data}
                        onDelete={deleteItem}
                        onNotesEditing={this.onNotesEditing}
                        transferTitle={transferTitle}
                        transferDescription={transferDescription}/>

                    {/* добавление заметки */}
                    <button 
                        className="main__btn-create" 
                        onClick={() => this.onNotesAdd()}>
                    </button>
                    <NotesAdd 
                        notesAdd={notesAdd} 
                        offNotesAdd={this.offNotesAdd}
                        onAdd={onAdd}/>

                    {/* редактрование заметки */}
                    <NotesEditing 
                        notesEditing={notesEditing}
                        offNotesEditing={this.offNotesEditing}
                        currentTitle={currentTitle}
                        currentDescription={currentDescription}
                        onNewTitleDescription={onNewTitleDescription}/>

                </div>
            </main>
        )
    }
}

export default AppMain;