import { MonsterCrudComponent } from './views/monster-crud/monster-crud.component';
import { CharacterCreateComponent } from './componets/character/character-create/character-create.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterCrudComponent } from './views/character-crud/character-crud.component';
import { HomeComponent } from './views/home/home.component';
import { CharacterUpdateComponent } from './componets/character/character-update/character-update.component';
import { CharacterDeleteComponent } from './componets/character/character-delete/character-delete.component';
import { CharacterDetailsComponent } from './componets/character/character-details/character-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
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
    path: 'characters/edit/:id',
    component: CharacterUpdateComponent
  },
  {
    path: 'characters/delete/:id',
    component: CharacterDeleteComponent
  },
  {
    path: 'characters/details/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'monsters',
    component: MonsterCrudComponent
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
