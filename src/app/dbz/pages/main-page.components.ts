import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService){

  }

  get character():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharaceterById(id)
  }

  onNewCharacter( character:Character):void{
  this.dbzService.onNewCharacter(character)
  }





}
