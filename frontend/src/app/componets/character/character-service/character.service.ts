import { Character } from './../character.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl = ' http://localhost:3001/characters';

  constructor(
    private snack: MatSnackBar,
    private http: HttpClient
    ) { }


  showMessage(msg: string): void{
    this.snack.open(msg, 'close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  create(character: Character): Observable<Character>{
    return this.http.post<Character>(this.baseUrl, character);
  }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl);
  }
}
