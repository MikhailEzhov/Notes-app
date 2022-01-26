import { Component } from 'react';

import './app-header.scss';


class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__main">
                        <h1 className="header__title">Notes</h1>
                        <nav className="header__nav">
                            <button className="header__search"></button>
                            <button className="header__info"></button>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;