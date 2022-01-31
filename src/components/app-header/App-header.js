import { Component } from 'react';

import AppInfo from '../app-info/App-info';
import NotesSearch from '../notes-search/Notes-search';

import './app-header.scss';



class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appInfo: 'info-none', // скрыто
            notesSearch: 'search-none' // скрыто
        }
    }



    // Локальный метод для показа AppInfo
    onAppInfo = () => {
		this.setState(appInfo => ({
			appInfo: 'info'
		}))
	}

    // Локальный метод для скрытия AppInfo
    offAppInfo = () => {
		this.setState(appInfo => ({
			appInfo: 'info-none'
		}))
	}
    //==================================================



    // Локальный метод для показа NotesSearch
    onNotesSearch = () => {  
		this.setState(notesSearch => ({
			notesSearch: 'notes-search'
		}))
	}

    // Локальный метод для скрытия NotesSearch
    offNotesSearch = () => {
		this.setState(notesSearch => ({
			notesSearch: 'search-none'
		}))
	}
    //==================================================



    render() {
        const {onUpdateSearch} = this.props; // диструктурием свойства, которые пришли из props
        const {appInfo, notesSearch} = this.state; // диструктурируем состояния из state

        return (
            <header className="header">
                <div className="container">
                    <div className="header__main">
                        <NotesSearch 
                            notesSearch={notesSearch} 
                            offNotesSearch={this.offNotesSearch}
                            onUpdateSearch={onUpdateSearch}/>
                        <h1 className="header__title">Notes</h1>
                        <nav className="header__nav">
                            <button className="header__search" onClick={() => this.onNotesSearch()}></button>
                            <button className="header__info" onClick={() => this.onAppInfo()}></button>
                        </nav>
                    </div>
                    <AppInfo appInfo={appInfo} offAppInfo={this.offAppInfo}/>
                </div>
            </header>
        )
    }
}

export default AppHeader;