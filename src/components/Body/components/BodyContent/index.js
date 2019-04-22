import React, { Component } from 'react';

import Room from './components/Room';
import Sidebar from './components/Sidebar';

import rooms from '../../../../data/rooms.json';

class BodyContent extends Component {
    render() {
        let roomsElements = rooms.map(room => {
            return <Room key={ room.id } room={ room }/>;
        });
        return (
            <div className="row">
                <div className="col-md-8 main">
                    { roomsElements }                    
                </div>
                <div className="col-md-4 sidebar">
                    <Sidebar />
                </div>
            </div>
        );
    }
}
  
export default BodyContent;