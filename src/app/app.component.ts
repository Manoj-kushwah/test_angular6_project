import {Component, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {ModalDirective} from 'ng2-bootstrap';
import {AuthService} from './service1/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jdesk9web';
  @ViewChild('modalFirst') modalFirst: ModalDirective;
  constructor(public auth: AuthService) {
    console.log($(document));
  }

  ngOnInit(){
    console.log(this.modalFirst);
  }
}
