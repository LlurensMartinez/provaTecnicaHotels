import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("HotelStore")
@observer
class Sidebar extends Component {

     saveCookies = (event) =>{
        const { cookies, dateInit, dateOut, adults, children, price, title } = this.props.HotelStore;
        cookies.set ('title', title , { path: '/' }, { path: '/:promo' });
        cookies.set ('dateInit', dateInit , { path: '/' }, { path: '/:promo' });
        cookies.set ('dateOut', dateOut , { path: '/' }, { path: '/:promo' });
        cookies.set ('adults', adults , { path: '/' }, { path: '/:promo' });
        cookies.set ('children', children , { path: '/' }, { path: '/:promo' });
        cookies.set ('price', price , { path: '/' }, { path: '/:promo' });
    }


    render() {
        
        const { HotelStore } = this.props
        return (
            <div className="card">
                <h2>Reservation Summary</h2>
                <div className="clearfix">
                    <h5 className="pull-left">{HotelStore.title}</h5>
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
                        <p className="base">From <strong><span id="checkin-summary">{HotelStore.dateInit}</span></strong> to <strong id="checkout-summary">{HotelStore.dateOut}</strong></p>
                    </div>

                    <div className="card-content">
                        <p className="main">People</p>
                        <p className="base" id="adults-summary">{HotelStore.adults} Adults</p>
                        <p className="base" id="children-summary">{HotelStore.children} Children</p>
                    </div>

                    <div className="card-checkout clearfix">
                        <div className="left pull-left">
                            <p className="main">Total</p>
                            <p className="base"><a href="#">Price details ></a></p>
                        </div>
                        <div className="right pull-right">
                            <p className="main">{HotelStore.price}€</p>
                        </div>
                    </div>

                    <a href="#" 
                       className="btn btn-primary btn-group-justified"
                       onClick={(event) => this.saveCookies(event)}
                       >
                        Save
                    </a>
                </div>
            </div>


        );
    }
}

export default Sidebar;