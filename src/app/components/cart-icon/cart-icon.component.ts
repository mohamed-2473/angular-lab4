import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent {
  constructor(public cartService: CartService, private router: Router) {}

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }
}