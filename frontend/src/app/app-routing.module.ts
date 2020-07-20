import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterCrudComponent } from './views/character-crud/character-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharacterCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
