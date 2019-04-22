import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("HotelStore")
@observer
class SearchBar extends Component {

    minDateCalendar(){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        let today = `${year}-${month<10?`0${month}`:`${month}`}-${date}`
        return today;
        }

    maxDateCalendar(){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear() + 1;
        
        let oneYearMore = `${year}-${month<10?`0${month}`:`${month}`}-${date}`
        return oneYearMore;
    }

    changeDateInit = (event) => {
        this.props.HotelStore.setDateInit(event.target.value);
    }

    changeDateOut = (event) => {
        this.props.HotelStore.setDateOut(event.target.value);
    }

    changeAdults = (event) => {
        this.props.HotelStore.setAdults(event.target.value);
    }

    changeChildren = (event) => {
        this.props.HotelStore.setChildren(event.target.value);
    }



    // Entra aqui al presionar Modify
    handleFormSubmit = (event) => {
        event.preventDefault();        
    }

    render() {
        console.log(this.props.HotelStore);
        const { dateInit, dateOut, adults, children } = this.props.HotelStore;

        return (
            <div className="engine text-center">
                <div className="engine-wrapper">
                    <div className="container text-center">

                        <form id="search" className="form-inline" >

                            <div className="form-group">
                                <div className="input-group date" data-date-format="dd/mm/yyyy">
                                    <input id="checkin" type="date" min={this.minDateCalendar()} max={this.maxDateCalendar()} name="dateInit" value={dateInit} onChange={(event) => this.changeDateInit(event)} className="form-control"  />
                                    <div className="input-group-addon" >
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group date" data-date-format="dd/mm/yyyy">
                                    <input id="checkout" type="date" min={this.minDateCalendar()} max={this.maxDateCalendar()}name="dateOut" value={dateOut} onChange={(event) => this.changeDateOut(event)} className="form-control"  />
                                    <div className="input-group-addon" >
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group select-inline">
                                <select className="form-control" name="adults" value={adults}  onChange={(event) => this.changeAdults(event)} placeholder="Adults" id="adults">
                                    <option defaultValue="" >Adults</option>
                                    <option value="1">Adults: 1</option>
                                    <option value="2">Adults: 2</option>
                                    <option value="3">Adults: 3</option>
                                    <option value="4">Adults: 4</option>
                                    <option value="5">Adults: 5</option>
                                    <option value="6">Adults: 6</option>
                                    <option value="7">Adults: 7</option>
                                    <option value="8">Adults: 8</option>
                                    <option value="9">Adults: 9</option>
                                </select>
                            </div>
                            <div className="form-group select-inline">
                                <select className="form-control" name="children" value={children}  onChange={(event) => this.changeChildren(event)} placeholder="Children" id="children">
                                    <option defaultValue="">Children</option>
                                    <option value="1">Children: 1</option>
                                    <option value="2">Children: 2</option>
                                    <option value="3">Children: 3</option>
                                    <option value="4">Children: 4</option>
                                    <option value="5">Children: 5</option>
                                    <option value="6">Children: 6</option>
                                    <option value="7">Children: 7</option>
                                    <option value="8">Children: 8</option>
                                    <option value="9">Children: 9</option>
                                </select>
                            </div>


                            <div className="form-group">
                                <a href="#" onClick={this.handleFormSubmit} className="btn btn-primary">Modify</a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;