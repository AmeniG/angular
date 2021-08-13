import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product: Product;



  constructor(private route: ActivatedRoute,private router: Router,
  private userService: ProductService) { } 

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProduct().subscribe(
      (data: any) => {
        console.log(data);
        this.product = data;
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }

  list(){
    this.router.navigate(['users']);
  }

}
