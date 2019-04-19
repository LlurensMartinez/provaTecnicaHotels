import React, { Component } from 'react';
import Sidebar from '../Body/components/BodyContent/components/Sidebar'

class SearchBar extends Component {

    state = {
        dateInit: this.getCurrentDate(),
        dateOut:this.getNextDate(),
        adults:"",
        children:"",
      }

    getCurrentDate(){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}-${month<10?`0${month}`:`${month}`}-${date}`
        }

    getNextDate(){

        let newDate = new Date()
        let date = newDate.getDate() + 1;
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}-${month<10?`0${month}`:`${month}`}-${date}`
        }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Entra aqui al presionar Modify
    handleFormSubmit = (event) => {
        event.preventDefault();
        const {dateInit, dateOut, adults, children } = this.state;
        // se envian los datos introducidos
        return <Sidebar
                    checkIn={dateInit} 
                    checkOut={dateOut} 
                    adults={adults} 
                    children={children}
                />     
  }

    render() {
        const { dateInit, dateOut, adults, children } = this.state;
        return (
            <div className="engine text-center">
                <div className="engine-wrapper">
                    <div className="container text-center">

                        <form id="search" className="form-inline" >

                            <div className="form-group">
                                <div className="input-group date" data-date-format="dd/mm/yyyy">
                                    <input id="checkin" type="date" name="dateInit" value={dateInit} onChange={this.handleChange} className="form-control"  />
                                    <div className="input-group-addon" >
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-group date" data-date-format="dd/mm/yyyy">
                                    <input id="checkout" type="date" name="dateOut" value={dateOut} onChange={this.handleChange} className="form-control"  />
                                    <div className="input-group-addon" >
                                        <span className="glyphicon glyphicon-calendar"></span>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group select-inline">
                                <select className="form-control" name="adults" value={adults}  onChange={this.handleChange} placeholder="Adults" id="adults">
                                    <option value="" selected>Adults</option>
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
                                <select className="form-control" name="children" value={children}  onChange={this.handleChange} placeholder="Children" id="children">
                                    <option value="" selected>Children</option>
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