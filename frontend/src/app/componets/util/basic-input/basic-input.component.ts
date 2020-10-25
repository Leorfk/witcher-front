import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../character/character.model';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css']
})
export class BasicInputComponent implements OnInit {

  @Input()
  inputValue: string;
  @Input()
  isDisabled: boolean = true;
  @Input()
  placeHolder: string;


  constructor() { }

  ngOnInit(): void {
  }

}
