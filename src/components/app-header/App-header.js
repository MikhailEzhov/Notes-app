import { Component } from 'react';
import AppInfo from '../app-info/App-info';
import NotesSearch from '../notes-search/Notes-search';

import './app-header.scss';


class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appInfo: 'info-none',    // начальное состояние выключенное
            notesSearch: 'search-none'    // начальное состояние выключенное
        }
    }

    onAppInfo = () => {             // меняет начальное состояние у appInfo - включаем
		this.setState(appInfo => ({
			appInfo: 'info'
		}))
	}

    offAppInfo = () => {            // меняет начальное состояние у appInfo - выкл
		this.setState(appInfo => ({
			appInfo: 'info-none'
		}))
	}

    onNotesSearch = () => {             // меняет начальное состояние у notesSearch - включаем
		this.setState(notesSearch => ({
			notesSearch: 'notes-search'
		}))
	}

    offNotesSearch = () => {             // меняет начальное состояние у notesSearch - выкл
		this.setState(notesSearch => ({
			notesSearch: 'search-none'
		}))
	}


    render() {
        const {appInfo, notesSearch} = this.state;    // диструктурируем состояния из state

        return (
            <header className="header">
                <div className="container">
                    <div className="header__main">
                        <NotesSearch notesSearch={notesSearch} offNotesSearch={this.offNotesSearch}/>
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