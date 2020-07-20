import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private snack: MatSnackBar) { }


  showMessage(msg: string): void{
    this.snack.open(msg, 'close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
