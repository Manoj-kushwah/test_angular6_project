import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {ImageCropperModule} from 'ngx-image-cropper';
import {ModalModule} from 'ng2-bootstrap';
import {routing} from './app.routing';
import {EagerComponent} from './eager.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    NgxMyDatePickerModule.forRoot(),
    ImageCropperModule,
    ModalModule.forRoot(),
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
