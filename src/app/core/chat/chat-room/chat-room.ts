import { Component } from '@angular/core';
import { StorageService } from '../../../services/storage/storage';
import { User } from '../../../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss',
  imports: [FormsModule, CommonModule]
})
export class ChatRoom {

  messages: string[] = [];
  user: string = '';

  constructor(
    private storage: StorageService,
    private userService: User
  ) {}

  ngOnInit() {
    this.user = this.userService.username;
    this.loadFromLocalStorage();     
    console.log(this.messages);       
  }

  addMessage(message: string) {
    if (!message.trim()) return;

    this.messages.push(message);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    this.storage.save('messages', this.messages);
  }

  loadFromLocalStorage() {
    const storedMessages = this.storage.load('messages');

    if (Array.isArray(storedMessages)) {
      this.messages = storedMessages;
    } else {
      this.messages = [];
    }    
  }

  openUserInfo() {}
}
