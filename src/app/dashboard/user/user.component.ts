import { Component, OnInit } from '@angular/core';
import {DataMapService, db, User} from '../../service1/data-map.service';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataMap: DataMapService, dashboard: DashboardService) { }

  ngOnInit() {
    console.log(this.dataMap);
    this.dataMap.userList.set(101, new User('Manoj', 'kushwah', 101));
  }

}
