import { TableConfig } from './table-config.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input()
  dataSource: any[];
  @Input()
  displayedColumns: TableConfig;
  @Input()
  routes: any[];

  constructor() {}

  ngOnInit(): void {
  }
}
