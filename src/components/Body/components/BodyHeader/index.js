import React, { Component } from 'react';

class BodyHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8 main">
                    <h2>Rooms & Rates</h2>
                    <p className="subtitle">Plan your perfect stay at our hotel</p>
                    <img src="images/cocos/wizard_1.png" width="480" className="wizard" alt="wizard"/>
                </div>
                <div className="col-md-4 sidebar-header"></div>
            </div>
        );
    }
}

export default BodyHeader;