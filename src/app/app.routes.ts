import { Routes } from '@angular/router';
import { ChatRoom } from './core/chat/chat-room/chat-room';
import { PrivateChat } from './core/chat/private-chat/private-chat';

export const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
  { path: 'chat', component: ChatRoom },
  { path: 'private', component: PrivateChat },
];
