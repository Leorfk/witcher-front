import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-crud',
  templateUrl: './character-crud.component.html',
  styleUrls: ['./character-crud.component.css']
})
export class CharacterCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  CreateCharacter(): void{
    this.router.navigate(['characters/create']);
  }

}
