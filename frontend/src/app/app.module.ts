import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './componets/template/header/header.component';
import { FooterComponent } from './componets/template/footer/footer.component';
import { NavComponent } from './componets/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CharacterCrudComponent } from './views/character-crud/character-crud.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CharacterCreateComponent } from './views/character-crud/character-create/character-create.component';

const Material = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatButtonModule
];

const Components = [
  HeaderComponent,
  FooterComponent,
  NavComponent
];

const Pages = [
  HomeComponent,
  CharacterCrudComponent,
  CharacterCreateComponent,
  NotFoundComponent
];

@NgModule({
  declarations: [
    AppComponent,
    Components,
    Pages
  ],
  imports: [
    Material,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
