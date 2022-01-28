import { Component } from 'react';

import AppHeader from '../app-header/App-header';
import AppMain from '../app-main/App-main';

import './app.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: 'UI concepts worth exsisting', description: 'description1'},
                {title: 'Book Review : The Design of Everyday Things by Don Norman', description: 'description2'},
                {title: 'Animes produced by Ufotable', description: 'description3'},
                {title: 'Mangas planned to read', description: 'description4'},
            ],
        }
    }

    // метод для удаления заметки
    deleteItem = (index) => {
        this.setState(({data}) => {
            return {
                data: data.filter((_, i) => i !== index)
            }
        })
    }

    // метод для добавления новой заметки
    addItem = (title, description) => {
        const newItem = {
            title,
            description
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }


    render() {
        const {data} = this.state;    // диструктурируем состояния из state

        return (
            <div className="app">
                <AppHeader/>
                <AppMain 
                    data={data}
                    deleteItem={this.deleteItem}
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;