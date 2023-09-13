import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.componet';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }



