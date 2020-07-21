import { CharacterCreateComponent } from './componets/character/character-create/character-create.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
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
  },
  {
    path: 'characters/create',
    component: CharacterCreateComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
