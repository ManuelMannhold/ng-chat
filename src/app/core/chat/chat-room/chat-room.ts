import { Component, inject } from '@angular/core';
import { StorageService } from '../../../services/storage/storage';
import { User } from '../../../services/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  imports: [FormsModule],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss',
})
export class ChatRoom {
  messages: string[] = [];
  user: string = '';

  constructor(private storage: StorageService, private username: User) {}
  
  ngOnInit() {
    this.user = this.username.username;
  }

  addMessage(message: string) {
    if (message.trim()) {
      this.messages.push(message);
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    this.storage.save('messages', this.messages);
  }

  openUserInfo() {}
}
