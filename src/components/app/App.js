import './app.scss';


function App() {
    return (
        <div className="app">

            <header className="header">
                <div className="container">
                    <h1 className="header__title">header</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis?</p>
                </div>
            </header>

            <main className="main">
                <div className="container">
                    <h2 className="main__title">main</h2>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <h2 className="footer__title">footer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, veritatis?</p>
                </div>
            </footer>

        </div>
    )
}

export default App;