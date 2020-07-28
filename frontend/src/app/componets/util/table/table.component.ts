import { CharacterService } from './../../character/character-service/character.service';
import { Character } from './../../character/character.model';
import { TableConfig } from './table-config.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input()
  dataSource: any[];
  @Input()
  displayedColumns: TableConfig;
  @Input()
  routes: any[];
  character: Character[] = [];

  constructor(private characterService: CharacterService) {}

  toma(char: Character): void{
    console.log(char);
    char.id = null;
    this.characterService.create(char).subscribe(x => {
      this.characterService.showMessage(`The ${x.name} has been add to game`);
    });
    this.characterService.getAll().subscribe(x => { this.dataSource = x});
  }

  ngOnInit(): void {
  }
}
