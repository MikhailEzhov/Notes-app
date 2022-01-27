import { Component } from 'react';
import AppHeader from '../app-header/App-header';
import NotesEdit from '../notes-edit/Notes-edit';

import createPicture from '../../img/create_a_note.svg';
import './app.scss';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notesEdit: 'edit-none'    // начальное состояние выключенное
        }
    }

    onNotesEdit = () => {             // меняет начальное состояние у notesEdit - включаем
		this.setState(notesEdit => ({
			notesEdit: 'notes-edit'
		}))
	}

    offNotesEdit = () => {            // меняет начальное состояние у notesEdit - выкл
		this.setState(notesEdit => ({
			notesEdit: 'edit-none'
		}))
	}

    render() {
        const {notesEdit} = this.state;    // диструктурируем состояния из state

        return (
            <div className="app">
    
                <AppHeader></AppHeader>
    
                <main className="main">
                    <div className="container">
    
                        <div className="main__create-first">
                            <img className="main__create-picture" src={createPicture} alt="Create your first note" />
                            <span className="main__create-title">Create your first note !</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam nobis modi necessitatibus omnis delectus culpa illum ipsam doloremque. Eum cupiditate voluptatibus, corporis consequatur, iusto unde iure nostrum aliquid, ea nobis dolorum molestias odit. Consequuntur laborum earum excepturi minima quis aut non suscipit quisquam! Consequatur, voluptatum provident aut eius porro cumque ipsam nulla exercitationem sapiente sit dolor optio asperiores obcaecati recusandae quas doloremque sequi incidunt accusantium? Dolore exercitationem mollitia molestiae impedit repellendus consequatur voluptates? Commodi dignissimos, neque aperiam saepe necessitatibus, temporibus, possimus voluptatum ipsam sapiente excepturi eaque iusto consequatur sed provident odit fugit? Delectus quia aspernatur tempore, voluptatem, debitis perferendis nemo placeat illum quisquam quod ea unde eos quo facilis repellendus iste ducimus cumque rerum temporibus cum dolorem reiciendis harum! Nam cum impedit minus unde suscipit inventore omnis quas soluta fugit dignissimos? Ducimus sed incidunt excepturi iste a molestiae dolore, explicabo corrupti officiis non odio veritatis consequatur harum beatae tempora, nesciunt quod! Odit reiciendis neque perspiciatis aliquid hic voluptatum repellat velit similique inventore id temporibus, impedit recusandae, ea dicta omnis voluptatem odio? Sed similique ut sapiente earum totam facere, natus debitis velit dolore maiores? Dolore nostrum necessitatibus deserunt quo quis, quidem autem fuga praesentium numquam beatae sit, voluptatem harum inventore! Ipsum error, necessitatibus architecto commodi accusamus, quos impedit molestiae aliquid iure exercitationem laudantium numquam! Perferendis consequatur nemo aliquid animi vel natus? Sunt voluptatibus distinctio facilis doloremque aliquid excepturi ad non reiciendis eaque impedit laboriosam esse, atque sit laborum quaerat ratione! Officia, fuga voluptas. Excepturi accusamus assumenda earum natus veritatis. Quod neque nam dolorum sequi mollitia nesciunt aliquid illo! Consequatur totam ea veritatis fuga placeat culpa aut temporibus vel veniam officia fugit, tempore soluta provident exercitationem obcaecati accusamus impedit quibusdam ratione nemo nobis, labore enim? Earum, laudantium? Laudantium beatae tempora omnis quia porro voluptates, error quisquam ut aliquam. Atque, blanditiis mollitia!</p>
                        </div>
    
                        <button className="main__btn-create" onClick={() => this.onNotesEdit()}></button>
                        <NotesEdit notesEdit={notesEdit} offNotesEdit={this.offNotesEdit}/>
                    </div>
                </main>
    
            </div>
        )
    }
}

export default App;