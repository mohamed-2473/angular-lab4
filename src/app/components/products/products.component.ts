import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducCardComponent } from "../produc-card/produc-card.component";
import { ProductService } from '../../services/product.service';
import { Product, ProductsResponse } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProducCardComponent],
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (response: ProductsResponse) => {
        this.products = response.products;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products';
        this.isLoading = false;
        console.error('Error loading products:', err);
      }
    });
  }
}