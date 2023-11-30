import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddComponent
  ],
  exports:[
    MainPageComponent

  ],
  imports:[
    CommonModule
  ]
})
export class DbzModule { }
