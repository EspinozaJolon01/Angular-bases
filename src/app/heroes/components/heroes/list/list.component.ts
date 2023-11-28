import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['spiderma','batman','hulk','burbuja','timi']
  public delete?: string;

  deleteHeores():void {
    this.delete = this.heroes.pop()
  }

}
