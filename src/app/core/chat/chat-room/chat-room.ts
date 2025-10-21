import { Component, inject } from '@angular/core';
import { StorageService } from '../../../services/storage/storage';

@Component({
  selector: 'app-chat-room',
  imports: [],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss',
})
export class ChatRoom {
  constructor(private storage: StorageService) {}
  messages: string[] = [];

  addMessage(message: string) {
    if (message.trim()) {
      this.messages.push(message);
      this.saveToLocalStorage();
    }
  }

  saveToLocalStorage() {
    this.storage.save('messages', this.messages);
  }
}
