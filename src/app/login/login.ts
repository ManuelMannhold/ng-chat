import { Component } from '@angular/core';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [FormsModule] 
})

export class Login {
  username: string = '';

  constructor(private router: Router, private user: User) {}

  submitName() {
  if (!this.username.trim()) return;

  this.user.username = this.username;

  this.router.navigate(['/toChat']);
}

}
