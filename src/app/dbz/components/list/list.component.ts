import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[]= [{
    name:'Trunk',
    power: 300000
  }]


  onDeleteCharaceter(index?:string):void {

    if(!index) return;
    this.onDelete.emit( index)
  }


}
