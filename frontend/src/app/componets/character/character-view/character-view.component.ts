import { Character } from './../character.model';
import { CharacterService } from './../character-service/character.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {

  characters: Character[];
  displayedColumns = ['name', 'age', 'aliases', 'action'];
  constructor(private characterService: CharacterService) { }

  buildTable(): void {
  }

  ngOnInit(): void {
    this.characterService.getAll().subscribe(x => {
      this.characters = x;
    });
  }
}
