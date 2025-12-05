import { Injectable } from '@angular/core';
import { StorageService } from './storage/storage';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private storage: StorageService) { }
    username: string = '';

    saveToLocalStorage() {
    this.storage.save('username', this.username);
  }
}
