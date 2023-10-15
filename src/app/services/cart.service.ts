import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(car:CarDetail){
    let item = CartItems.find(c=>c.car.brandId===car.brandId);
    if(item){
      item.quantitiy+=1;
    }
    else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantitiy=1
      CartItems.push(cartItem)
    }
  }

  removeFromCart(car:CarDetail){
    let item:any = CartItems.find(c=>c.car.brandId===car.brandId);
    CartItems.splice(CartItems.indexOf(item),1)
  }

  list(){
    return CartItems;
  }
}
