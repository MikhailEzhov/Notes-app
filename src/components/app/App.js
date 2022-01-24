import './app.scss';


function App() {
    return (
        <div className="app">

            <header className="header">
                <div className="container">
                    <h1 className="header__title">header</h1>
                </div>
            </header>

            <main className="main">
                <div className="container">
                    <h2 className="main__title">main</h2>
                    <p className="main__description">Lorem ipsum dolor sit amet.</p>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <h2 className="footer__title">footer</h2>
                </div>
            </footer>

        </div>
    )
}

export default App;