import React, { Component } from 'react';

class Room extends Component {
    render() {
        return (
            <div className="card clearfix pointer active">
                <div className="room-image">
                    <img src={ this.props.room.image } width="100%" />
                </div>

                <div className="room-content">
                    <h5 className="form-group">{ this.props.room.title }</h5>
                    <p className="form-group">{ this.props.room.description }</p>

                    <p className="form-group">Size: { this.props.room.size }m2</p>

                    <div className="room-info">
                        <div className="item">
                            <span className="inline-block">
                                <img src="images/icons/double-bed.svg" width="40" />
                            </span>
                            <div>Beds: { this.props.room.beeds }</div>
                        </div>
                        <div className="item">People: { this.props.room.people }</div>
                        <div className="item price text-right">
                            <span className="line-through">€{ this.props.room.price1 }</span>
                            €{ this.props.room.price2 }
                    </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Room;