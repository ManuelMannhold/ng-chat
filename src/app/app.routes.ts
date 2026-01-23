import { Routes } from '@angular/router';
import { ChatRoom } from './core/chat/chat-room/chat-room';
import { Login } from './login/login';
import { ChangeName } from './core/change-name/change-name';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'toChat', component: ChatRoom, pathMatch: 'full' },
  {path: 'change-name', component: ChangeName }
];
