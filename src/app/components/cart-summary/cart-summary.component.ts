import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService:CartService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.getCart();
  }
  
  cartItems:CartItem[]=[];
  getCart(){
    this.cartItems = this.cartService.list();
  }
  
  removeFromCart(car:CarDetail){
    this.cartService.removeFromCart(car);
    this.toastr.error("Sepetten Silindi",car.description)
  }
}
