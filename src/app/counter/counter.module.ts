import { NgModule } from '@angular/core';
import { NameComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    NameComponent
  ],
  exports:[
    NameComponent
  ]
})

export class CounterModule {}
