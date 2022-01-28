import { Component } from 'react';

import NotesList from '../notes-list/Notes-list';
import NotesAdd from '../notes-add/Notes-add';

import createPicture from '../../img/create_a_note.svg';
import './app-main.scss';


class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesAdd: 'add-none'    // начальное состояние выключенное
        }
    }

    onNotesAdd = () => {             // меняет начальное состояние у notesAdd - включаем
        window.scrollTo(0,0);           // прокручию в самый верх
		this.setState(notesAdd => ({
			notesAdd: 'notes-add'
		}))
	}

    offNotesAdd = () => {            // меняет начальное состояние у notesAdd - выкл
		this.setState(notesAdd => ({
			notesAdd: 'add-none'
		}))
	}

    render() {
        const {notesAdd} = this.state;    // диструктурируем состояния из state
        const {data, deleteItem, onAdd} = this.props;         // диструктурируем свойство из props

        return (
            <main className="main">
                <div className="container">

                    {/* <div className="main__create-first">
                        <img className="main__create-picture" src={createPicture} alt="Create your first note"/>
                        <span className="main__create-title">Create your first note !</span>
                    </div> */}
                    
                    <NotesList 
                        data={data}
                        onDelete={deleteItem}/>

                    <button 
                        className="main__btn-create" 
                        onClick={() => this.onNotesAdd()}>
                    </button>
                    <NotesAdd 
                        notesAdd={notesAdd} 
                        offNotesAdd={this.offNotesAdd}
                        onAdd={onAdd}/>
                </div>
            </main>
        )
    }
}

export default AppMain;