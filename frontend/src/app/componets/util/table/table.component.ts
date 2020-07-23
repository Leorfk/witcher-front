import { Character } from './../../character/character.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input()
  characters: Character[];
  @Input()
  displayedColumns: string[];
  @Input()
  routes: any[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.routes);
  }
}
