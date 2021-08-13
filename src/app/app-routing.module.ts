import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: '', component: LoginComponent },
  { path: 'addUser', component: CreateUserComponent },
  { path: 'updateUser/:id', component: UpdateUserComponent },
  { path: 'UserDetails/:id', component: UserDetailsComponent  },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'addProduct', component: CreateProductComponent },
  { path: 'updateProduct/:id', component: UpdateProductComponent },
  { path: 'Productdetails/:id', component: ProductDetailsComponent  },
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'categories', component: CategoryListComponent },
  { path: 'addCategory', component: CreateCategoryComponent },
  { path: 'updateCategory/:id', component: UpdateCategoryComponent },
  { path: 'Categorydetails/:id', component: CategoryDetapilsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }