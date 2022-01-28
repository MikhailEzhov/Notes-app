import { Component } from 'react';

import './app-info.scss';


class AppInfo extends Component  {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {appInfo, offAppInfo} = this.props;    // диструктурировали свойства, которые пришли из props

        return (
            <div className={appInfo} onClick={() => offAppInfo()}>
                <div className="info__block">Made by Mikhail Ezhov</div>
            </div>
        )
    }
}


export default AppInfo;