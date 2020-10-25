import { Character } from './../character.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  baseUrl = ' http://localhost:3000/characters';

  constructor(private snack: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snack.open(msg, 'close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e.message, true);
    return EMPTY;
  }

  create(character: Character): Observable<Character> {
    return this.http.post<Character>(this.baseUrl, character).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getAll(): Observable<Character[]> {
    return this.http.get<Character[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  getById(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(character: Character): Observable<Character> {
    return this.http
      .put<Character>(`${this.baseUrl}/${character.id}`, character)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  delete(character: Character): Observable<Character> {
    return this.http.delete<Character>(`${this.baseUrl}/${character.id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
}
