import { Router, ActivatedRoute } from '@angular/router';
import { CharacterService } from './../character-service/character.service';
import { Character } from './../character.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute,
    private characterService: CharacterService) { }

    ngOnInit(): void {
      this.characterService.getById(this.route.snapshot.paramMap.get('id')).subscribe(x => {
        this.character = x;
      });
    }

  goback(): void {
    this.router.navigate(['/characters']);
  }

}
