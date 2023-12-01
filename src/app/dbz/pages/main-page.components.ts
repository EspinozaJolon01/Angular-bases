import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'vegeta777',
    power: 50000
  }];


  onNewCharacter( character:Character): void {
    console.log('MainPage');
    console.log(character)
  }

}
