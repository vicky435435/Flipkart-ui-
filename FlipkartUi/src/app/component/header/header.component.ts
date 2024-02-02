import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public totalItem : number = 0;
  constructor(private cartServices: CartService){
  }
  
  ngOnInit(): void {
    this.cartServices.getProducts().subscribe(res =>{
      this.totalItem = res.length;
    })
  }

}
