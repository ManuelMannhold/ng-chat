import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-change-name',
  imports: [],
  templateUrl: './change-name.html',
  styleUrl: './change-name.scss',
})
export class ChangeName {
  constructor(private router: Router, private user: User) {}
  newName: string = '';

  changeName(newName: string): void {
    console.log('Name geändert!', newName);
    this.user.username = newName;
    this.user.saveToLocalStorage();
    this.router.navigate(['/chat']);
  }
}
