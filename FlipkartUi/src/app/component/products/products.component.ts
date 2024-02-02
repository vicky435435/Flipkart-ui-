import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public productList: any;

  constructor(private apiServices:ApiService, private cartServices: CartService ){

  }

  ngOnInit(): void {
   this.apiServices.getProducts().subscribe(res=>{
    this.productList = res;
    console.log(this.productList.category)

    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
   })
  }

  addTocart(item:any){
       this.cartServices.addCart(item)
  }

}
