import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';

@inject("HotelStore")
@observer
class Room extends Component {
    
    changeTitleAndPrice = (event) => {  
        const { title, price2, price1 } = this.props.room
        const { HotelStore } = this.props
        
        HotelStore.setTitle(title);
        if(HotelStore.promo === "promo_code"){
          HotelStore.setPrice(price2);  
        }else{
          HotelStore.setPrice(price1);
        }
        
    }

    render() {
        const { HotelStore } = this.props
        const {title, price2, price1, image, description, size, beeds, people} = this.props.room
        return (
            <div className="card clearfix pointer active">
                <div className="room-image">
                    <img src={ image } 
                         onClick={(event) => this.changeTitleAndPrice(event)} width="100%" 
                    />
                </div>

                <div className="room-content">
                    <h5 className="form-group" >{ title }</h5>
                    <p className="form-group">{ description }</p>

                    <p className="form-group">Size: { size }m2</p>

                    <div className="room-info">
                        <div className="item">
                            <span className="inline-block">
                                <img src="images/icons/double-bed.svg" width="40" />
                            </span>
                            <div>Beds: { beeds }</div>
                        </div>
                        <div className="item">People: { people }</div>
                        <div className="item price text-right">
                            <span className="line-through"></span>

                            {HotelStore.promo ===  "promo_code" ?
                                <p>€{ price2 }</p> :
                                <p>€{ price1 }</p>
                            }

                            
                    </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Room;