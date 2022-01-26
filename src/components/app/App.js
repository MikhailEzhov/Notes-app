import { Component } from 'react';
import AppHeader from '../app-header/App-header';

import createPicture from '../../img/create_a_note.svg';
import './app.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="app">
    
                <AppHeader></AppHeader>
    
                <main className="main">
                    <div className="container">
    
                        <div className="main__create-first">
                            <img className="main__create-picture" src={createPicture} alt="Create your first note" />
                            <span className="main__create-title">Create your first note !</span>
                        </div>
    
                        <button className="main__btn-create"></button>
                    </div>
                </main>
    
            </div>
        )
    }
}

export default App;