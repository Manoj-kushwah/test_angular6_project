import {Component, OnInit} from '@angular/core';
import {DataMapService, User} from '../service1/data-map.service';

@Component({
  template: '<p>Lazy Component</p>'
})
export class LazyComponent implements OnInit {
  constructor(private dataMap: DataMapService) {}
  ngOnInit() {
    console.log(this.dataMap);
    this.dataMap.userList.set(100, new User('Sandeep', 'kushwah', 100));
  }
}
