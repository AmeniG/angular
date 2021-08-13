import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category, category } from '../category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class categoryDetailsComponent implements OnInit {

  id: number;
  category: Category;



  constructor(private route: ActivatedRoute,private router: Router,
  private categoryService: CategoryService) { } 

  ngOnInit() {
    this.category = new Category();

    this.id = this.route.snapshot.params['id'];
    
    this.categoryService.getCategory(category).subscribe(
      (data: any) => {
        console.log(data);
        this.category = data;
      },
      (error) => {
        console.log('something went wrong');
      }
    );
  }

  list(){
    this.router.navigate(['categories']);
  }
}
