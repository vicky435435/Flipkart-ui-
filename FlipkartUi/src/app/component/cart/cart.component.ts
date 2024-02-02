import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  public products : any = [];
  public grandTotal: number = 0;
  constructor(private cartServices: CartService){
  }

  ngOnInit(): void {
    this.cartServices.getProducts().subscribe(res =>{
      this.products = res;
      this.grandTotal = this.cartServices.getTotalPrice()
    })
    
  }

  removeItem(item:any){
     this.cartServices.removeCartItem(item)
  }

  emptyCart(){
    this.cartServices.removeAllCart()
  }





}
