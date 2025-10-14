import { Component } from '@angular/core';

@Component({
  selector: 'app-private-chat',
  imports: [],
  templateUrl: './private-chat.html',
  styleUrl: './private-chat.scss'
})
export class PrivateChat {
 messages: string[] = [];

addMessage(message: string) {
  if (message.trim()) {
    this.messages.push(message);
  }
}
}
