import { Router } from '@angular/router';
import { CharacterService } from './../../../componets/character/character-service/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {

  constructor(
    private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.characterService.showMessage('Personagem salvo com sucesso!!!');
  }

  back(): void {
    this.characterService.showMessage('Arregou!!!');
    this.router.navigate(['/characters']);
  }

}
