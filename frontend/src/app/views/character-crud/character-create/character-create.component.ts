import { Character } from './../../../componets/character/character.model';
import { Router } from '@angular/router';
import { CharacterService } from './../../../componets/character/character-service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {

  character: Character = {
    name: 'Gearlt',
    age: 123,
    abilities: ['Igni'],
    affiliation: ['Novgrad'],
    aliases: 'Vesemir',
    eyeColor: 'Brown',
    hairColor: 'none',
    gender: 'Male',
    profession: 'Witcher',
    skin: 'White'
  };

  constructor(
    private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.characterService.showMessage('Arregou!!!');
    this.router.navigate(['/characters']);
  }

  create(): void {
    this.characterService.create(this.character).subscribe(x => {
      this.characterService.showMessage(`The ${x.name} has been add to game`);
      this.router.navigate(['/characters']);
    });
  }

}
