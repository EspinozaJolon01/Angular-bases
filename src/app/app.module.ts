import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { HeroComponent } from './heroes/components/heroes/hero/hero.component';
import { ListComponent } from './heroes/components/heroes/list/list.component'; */
import { CounterModule } from './counter/counter.module';
import { HerosModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    /* HeroComponent,
    ListComponent */



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HerosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
