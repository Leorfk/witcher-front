import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  formItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  showobj(): void{
    console.log(this.formItem);
  }

}
