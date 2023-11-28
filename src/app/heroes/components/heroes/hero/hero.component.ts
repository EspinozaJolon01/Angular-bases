import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'SUperman';
  public age:  Number = 50

  get getName():string{
    return this.name.toUpperCase()
  }

  getDescripcion():string{
    return `${this.name} - ${this.age}`
  }

  chagenHero():void {
    this.name = 'Luis';
  }

  changeAge():void {
    this.age = 666
  }

  resetInfgo():void {
    this.name = 'SUperman';
    this.age = 50;
  }


}
