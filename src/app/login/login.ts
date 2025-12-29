import { Component } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/storage/storage';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [FormsModule],
})
export class Login {
  username: string = '';

  constructor(private router: Router, private userService: User, private storage: StorageService) {}

  submitName() {
    if (!this.username.trim()) return;
    this.userService.username = this.username;
    this.saveNameToLocalStorage();
    this.router.navigate(['/toChat']);
  }

  saveNameToLocalStorage() {
    this.storage.save('chatUser', this.userService.username);
  }
}
