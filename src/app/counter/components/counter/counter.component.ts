import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<hr><h1>otra pagina</h1>

          <h2> conteo: {{ counte }}</h2>
          <button (click)="conteoSumar()">+1</button>
          <button (click)="conteoRestar()">-1</button>
          <button (click)="restabler()">Reset</button>
  `
})

export class NameComponent  {
  constructor() { }

  public counte:number = 10;

  conteoSumar():void {
      this.counte += 1;
  }

  conteoRestar():void{
    this.counte -= 1;
  }

  restabler():void {
    this.counte = 10;
  }


}
