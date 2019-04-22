import { observable, action }  from 'mobx';
import RootStore from './RootStore';

class HotelStore extends RootStore {
  
  @observable dateInit = this.getCurrentDate();
  @observable dateOut = this.getNextDate();
  @observable adults = ""
  @observable children = "";
  @observable title = "Room";
  @observable price = "";
  @observable promo = "";
  @observable cookies = "";
  
  
  @action setDateInit = (date) =>{
    this.dateInit = date;
  }
  
  @action setDateOut = (date) =>{
    this.dateOut = date;
  }
  
  @action setAdults = (adults) =>{
    this.adults = adults;
  }
  
  @action setChildren = (children) =>{
    this.children = children;
  }
  
  @action setTitle = (title) =>{
    this.title = title;
  }
  
  @action setPrice = (price) =>{
    this.price = price;
  }
  
  @action setPromo = (promo) =>{
    this.promo = promo;
  }
  
  @action setCookies = (cookies) =>{
    this.cookies = cookies;
    const { adults, price, title, children, dateInit, dateOut} = cookies.cookies
    if(adults || price || title || children || dateInit || dateOut){
      this.adults = adults;
      this.price = price;
      this.title = title;
      this.children = children;
      this.dateOut = dateInit;
      this.dateInit = dateOut;
    }
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


}

const hotelStore = new HotelStore();

export default hotelStore;