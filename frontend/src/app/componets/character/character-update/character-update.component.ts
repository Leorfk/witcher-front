import { Character } from './../character.model';
import { CharacterService } from './../character-service/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-update',
  templateUrl: './character-update.component.html',
  styleUrls: ['./character-update.component.css']
})
export class CharacterUpdateComponent implements OnInit {

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

  update(): void {
    this.characterService.update(this.character).subscribe(() => {
      this.characterService.showMessage(`Personagem ${this.character.name}, atualizado com sucesso!!`);
      this.router.navigate(['/characters']);
    });
  }

  cancel(): void {
    this.router.navigate(['/characters']);
  }

}
