import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './componets/template/header/header.component';
import { FooterComponent } from './componets/template/footer/footer.component';
import { NavComponent } from './componets/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CharacterCrudComponent } from './views/character-crud/character-crud.component';

const MaterialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule
];

const MyComponents = [
  HeaderComponent,
  FooterComponent,
  NavComponent
];

const PageComponents = [
  HomeComponent,
  CharacterCrudComponent
];

@NgModule({
  declarations: [
    AppComponent,
    MyComponents,
    PageComponents
  ],
  imports: [
    MaterialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
