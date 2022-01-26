import { Component } from 'react';

import './app-info.scss';

class AppInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="info">
                <div className="info__block">Made by Mikhail Ezhov</div>
            </div>
        )
    }
}

export default AppInfo;