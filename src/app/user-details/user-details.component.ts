import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class categoryDetailsComponent implements OnInit {

  id: number;
  user: User;



  constructor(private route: ActivatedRoute,private router: Router,
  private userService: UserService) { } 

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.user = data;
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