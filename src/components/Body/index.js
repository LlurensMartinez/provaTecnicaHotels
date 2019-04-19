import React, { Component } from 'react';

import BodyHeader from './components/BodyHeader';
import BodyContent from './components/BodyContent';

class Body extends Component {
    render() {
        return (
            <div className="container rar-summary">
                <BodyHeader />                
                <BodyContent />
            </div>
        );
    }
}
  
export default Body;