import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/heroes/hero/hero.component";
import { ListComponent } from "./components/heroes/list/list.component";




@NgModule({
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent,

  ],
  imports:[
    CommonModule
  ]
})

export class HerosModule {}
