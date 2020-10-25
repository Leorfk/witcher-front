import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterCrudComponent } from './monster-crud.component';

describe('MonsterCrudComponent', () => {
  let component: MonsterCrudComponent;
  let fixture: ComponentFixture<MonsterCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
