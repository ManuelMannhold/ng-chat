import { Component, ElementRef, ViewChild } from '@angular/core';
import { StorageService } from '../../../services/storage/storage';
import { User } from '../../../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BOT_REPLIES } from './bot-replies';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss',
  imports: [FormsModule, CommonModule],
})
export class ChatRoom {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;
  user: string = '';
  showNameModal: boolean = false;
  tempUserName: string = '';
  messages: { text: string; author: string }[] = [];

  constructor(private storage: StorageService, private userService: User) {}

  ngOnInit() {
    this.user = this.storage.load('chatUser');
    this.loadFromLocalStorage();
    this.sendWelcomeMessage();
    console.log(this.user);
  }

  sendWelcomeMessage() {
    this.messages.push({
      author: 'Bot',
      text: `Hallo ${this.user} 👋`,
    });
  }

  openNameModal() {
    this.tempUserName = this.user;
    this.showNameModal = true;
  }

  closeNameModal() {
    this.showNameModal = false;
  }

  addMessage(message: string) {
    if (!message.trim()) return;

    this.messages.push({ text: message, author: this.user });
    this.saveToLocalStorage();
    this.scrollToBottom();
    this.checkForAnswer(message);
  }

  checkForAnswer(lastMessage: string) {
    const lowerMessage = lastMessage.toLowerCase();

    for (const key in BOT_REPLIES) {
      if (lowerMessage.includes(key)) {
        const thinkingMessage = { text: '...', author: 'Bot' };
        this.messages.push(thinkingMessage);
        this.saveToLocalStorage();
        this.scrollToBottom();

        setTimeout(() => {
          const replies = BOT_REPLIES[key];
          const reply = replies[Math.floor(Math.random() * replies.length)];

          const index = this.messages.indexOf(thinkingMessage);
          if (index !== -1) {
            this.messages[index].text = reply;
          }
          this.saveToLocalStorage();
          this.scrollToBottom();
        }, 1500);

        break;
      }
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop =
          this.messagesContainer.nativeElement.scrollHeight;
      }
    }, 50);
  }

  loadFromLocalStorage() {
    const storedMessages = this.storage.load('messages');
    const storedUser = this.storage.load('chatUser');

    if (Array.isArray(storedMessages && storedUser)) {
      this.messages = storedMessages;
      this.user = storedUser;
    } else {
      this.messages = [];
    }
    this.scrollToBottom();
  }

  saveToLocalStorage() {
    this.storage.save('messages', this.messages);
  }

  saveName() {
    if (!this.tempUserName.trim()) return;

    this.user = this.tempUserName.trim();
    this.storage.save('chatUser', this.user);
    this.closeNameModal();
    this.sendWelcomeMessage();
  }
}
