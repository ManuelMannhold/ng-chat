import { Component } from '@angular/core';

@Component({
  selector: 'app-change-name',
  imports: [],
  templateUrl: './change-name.html',
  styleUrl: './change-name.scss'
})
export class ChangeName {
    newName: string = '';

  changeName(newName: string): void {
    
    console.log('Name geändert!', newName);
  }
  
}
