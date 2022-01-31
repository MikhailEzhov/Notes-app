import { Component } from 'react';

import AppHeader from '../app-header/App-header';
import AppMain from '../app-main/App-main';

import './app.scss';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: 'UI concepts worth exsisting', description: 'description1', id: 1},
                {title: 'Book Review : The Design of Everyday Things by Don Norman', description: 'description2', id: 2},
                {title: 'Animes produced by Ufotable', description: 'description3', id: 3},
                {title: 'Mangas planned to read', description: 'description4', id: 4},
            ],
            termSearch: '',       // строка поиска, прийдет из комопонента notes-search
        }
        this.maxId = 5;
    }



    // ГЛОБАЛЬНЫЙ МЕТОД для удаления заметки
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    //==================================================



    // ГЛОБАЛЬНЫЙ МЕТОД для добавления новой заметки
    addItem = (title, description) => {
        const newItem = {
            title,
            description,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    //==================================================



    // ГЛОБАЛЬНЫЙ МЕТОД для поиска:
    searchNotes = (data, termSearch) => {
        if (termSearch.lenght === 0) {  // если в поиске пусто, то вернем items
            return data;
        }
        return data.filter(item => {
            return item.title.indexOf(termSearch) > -1 // если нечего не найдено, то вернется -1. если найдет, то вернет индекс подстроки
        })
    }

    // ГЛОБАЛЬНЫЙ МЕТОД для обновления поиска:
    onUpdateSearch = (termSearch) => {
        this.setState({termSearch: termSearch});
    }
    //==================================================



    render() {
        const {data, termSearch} = this.state; // диструктурируем состояния из state
        const visibleData = this.searchNotes(data, termSearch); // видимые данные после фильтрации

        return (
            <div className="app">
                <AppHeader
                    onUpdateSearch={this.onUpdateSearch}/>

                <AppMain 
                    data={visibleData}
                    deleteItem={this.deleteItem}
                    onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;
