import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserOrder } from 'src/app/interfaces/user-order.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  orders$!: Observable<UserOrder[]>;
  test!: any;

  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.orders$ = this.userService.getOrdersFromUser();
    this.userService.getOrdersFromUser().subscribe(result => {
      console.log(result);
    })
  }



}
