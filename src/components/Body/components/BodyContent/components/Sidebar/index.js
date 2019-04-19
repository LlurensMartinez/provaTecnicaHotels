import React, { Component } from 'react';
import SearchBar from '../../../../../SearchBar/index'


class Sidebar extends Component {
    
    state = {
        dateInit: "2017-02-02",
        dateOut:"2017-02-06",
        adults:"2",
        children:"2",
    }
    
    render() {
        return (
            <div className="card">
                <h2>Reservation Summary</h2>
                <div className="clearfix">
                    <h5 className="pull-left">Mini Dreamy Room</h5>
                    <div className="form-group pull-right">
                        <select className="pull-right" id="rooms">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                        </select>
                    </div>
                </div>

                <div className="clearfix">

                    <div className="card-content">
                        <p className="main">Check in</p>
                        <p className="base">From 15.00h</p>
                    </div>

                    <div className="card-content">
                        <p className="main">Check out</p>
                        <p className="base">Before 12.00h</p>
                    </div>

                    <div className="card-content">
                        <p className="main">Reservation date</p>
                        <p className="base">From <strong><span id="checkin-summary">{this.state.dateInit}</span></strong> to <strong id="checkout-summary">{this.state.dateOut}</strong></p>
                    </div>

                    <div className="card-content">
                        <p className="main">People</p>
                        <p className="base" id="adults-summary">{this.state.adults}</p>
                        <p className="base" id="children-summary">{this.state.children}</p>
                    </div>

                    <div className="card-checkout clearfix">
                        <div className="left pull-left">
                            <p className="main">Total</p>
                            <p className="base"><a href="#">Price details ></a></p>
                        </div>
                        <div className="right pull-right">
                            <p className="main">€350</p>
                        </div>
                    </div>

                    <a href="#" className="btn btn-primary btn-group-justified">
                        Save
                    </a>
                </div>
            </div>


        );
    }
}

export default Sidebar;