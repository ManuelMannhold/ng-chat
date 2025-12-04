import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username: string = '';

  constructor(private router: Router) {}

  submitName() {
    if (!this.username.trim()) return;
    this.router.navigate(['/toChat']);
  }
}
