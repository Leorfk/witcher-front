import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character-service/character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-character-delete',
  templateUrl: './character-delete.component.html',
  styleUrls: ['./character-delete.component.css']
})
export class CharacterDeleteComponent implements OnInit {

  character: Character = {
    name: '',
    age: 0,
    abilities: [],
    affiliation: [],
    aliases: '',
    eyeColor: '',
    hairColor: '',
    gender: '',
    profession: '',
    skin: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getById(this.route.snapshot.paramMap.get('id')).subscribe(x => {
      this.character = x;
    });
  }

  delete(): void {
    this.characterService.delete(this.character).subscribe(() => {
      this.characterService.showMessage(`Personagem ${this.character.name}, foi excluido!!!`);
      this.router.navigate(['/characters']);
    });
  }

  cancel(): void {
    this.router.navigate(['/characters']);
  }
}
