import { Component } from 'react';

import AppHeader from '../app-header/App-header';
import AppMain from '../app-main/App-main';

import './app.scss';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {title: 'Note 1', description: 'Description for note 1', id: 1},
                {title: 'Note 2', description: 'Description for note 2', id: 2},
                {title: 'Note 3', description: 'Description for note 3', id: 3},
            ],
            termSearch: '',       // строка поиска, прийдет из комопонента notes-search
            currentTitle: '',     // текущий title, прийдет по клику на редактирование
            currentDescription: '',     // текущий description, прийдет по клику на редактирование
        }
        this.maxId = 4;
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



    // ГЛОБАЛЬНЫЙ МЕТОД: приходит и записывается currentTitle  при клике на редактирование
    transferTitle = (currentTitle) => {
        this.setState({currentTitle: currentTitle});
    }
    // ГЛОБАЛЬНЫЙ МЕТОД: приходит и записывается currentDescription  при клике на редактирование
    transferDescription = (currentDescription) => {
        this.setState({currentDescription: currentDescription});
    }
    //==================================================



    // ГЛОБАЛЬНЫЙ МЕТОД: при редактировании меняет на новый title и новый description
    onNewTitleDescription = (newTitle, newDescription) => {
        let currentTitle = this.state.currentTitle;
        let changedTitle = newTitle;
        let currentDescription = this.state.currentDescription;
        let changedDescription = newDescription;

        if (changedTitle == '') {
            changedTitle = currentTitle;
        }
        if (changedDescription == '') {
            changedDescription = currentDescription;
        }

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.title === currentTitle) {
                    return {...item, title: changedTitle, description: changedDescription}
                }
                return item;
            })
        }));
    }



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
        const {data, termSearch, currentTitle, currentDescription} = this.state; // диструктурируем состояния из state
        const visibleData = this.searchNotes(data, termSearch); // видимые данные после фильтрации

        return (
            <div className="app">
                <AppHeader
                    onUpdateSearch={this.onUpdateSearch}/>

                <AppMain 
                    data={visibleData}
                    deleteItem={this.deleteItem}
                    onAdd={this.addItem}
                    transferTitle={this.transferTitle}
                    transferDescription={this.transferDescription}
                    currentTitle={currentTitle}
                    currentDescription={currentDescription}
                    onNewTitleDescription={this.onNewTitleDescription}/>
            </div>
        )
    }
}

export default App;
