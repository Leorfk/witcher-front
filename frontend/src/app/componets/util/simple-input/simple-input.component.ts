import { SimpleInput } from './simple-input.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.css']
})
export class SimpleInputComponent implements OnInit {

  @Input()
  inputValue: SimpleInput = {
    value: 'Sushi',
    placeHolder: 'Teste',
    label: 'Food',
    class: null
  };
  @Input()
  isDisabled = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.isDisabled);
  }

}
