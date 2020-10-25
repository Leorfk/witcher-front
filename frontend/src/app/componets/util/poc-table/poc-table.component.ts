import { Component, OnInit } from '@angular/core';
import { Character } from '../../character/character.model';
import { CharacterService } from './../../character/character-service/character.service';

@Component({
  selector: 'app-poc-table',
  templateUrl: './poc-table.component.html',
  styleUrls: ['./poc-table.component.css']
})
export class PocTableComponent implements OnInit {
  characters: Character[];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAll().subscribe(x => {
      console.log(x);
      this.characters = x;
    });
  }
}
