import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-produc-card',
  templateUrl: './produc-card.component.html',
  styleUrls: ['./produc-card.component.css']
})
export class ProducCardComponent {
  @Input() productItem!: Product;

  constructor(
    private router: Router,
    private cartService: CartService
  ) {}

  viewProductDetails(event: Event, productId: number): void {
    event.stopPropagation();
    this.router.navigate(['/product', productId]);
  }

  addToCart(event: Event, product: Product): void {
    event.stopPropagation();
    this.cartService.addToCart(product);
  }
}