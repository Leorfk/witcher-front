import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { HeaderComponent } from './componets/template/header/header.component';
import { FooterComponent } from './componets/template/footer/footer.component';
import { NavComponent } from './componets/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { CharacterCrudComponent } from './views/character-crud/character-crud.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { CharacterCreateComponent } from './componets/character/character-create/character-create.component';
import { CharacterViewComponent } from './componets/character/character-view/character-view.component';
import { CharacterUpdateComponent } from './componets/character/character-update/character-update.component';
import { CharacterDeleteComponent } from './componets/character/character-delete/character-delete.component';
import { CharacterDetailsComponent } from './componets/character/character-details/character-details.component';
import { TableComponent } from './componets/util/table/table.component';
import { FormComponent } from './componets/util/form/form.component';
import { SimpleInputComponent } from './componets/util/simple-input/simple-input.component';


const Material = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
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
  CharacterViewComponent,
  CharacterUpdateComponent,
  CharacterDeleteComponent,
  CharacterDetailsComponent,
  NotFoundComponent
];

@NgModule({
  declarations: [
    AppComponent,
    Components,
    Pages,
    TableComponent,
    FormComponent,
    SimpleInputComponent
  ],
  imports: [
    Material,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
