import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  imports: [],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss'
})
export class ChatRoom {
 messages: string[] = [];

addMessage(message: string) {
  if (message.trim()) {
    this.messages.push(message);
  }
}
}
