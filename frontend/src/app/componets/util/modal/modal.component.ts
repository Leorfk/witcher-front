import { TableComponent } from './../table/table.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  dataSource: any[];
  @Input()
  displayedColumns: TableComponent;
  @Input()
  routes: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
