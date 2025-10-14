import { Routes } from '@angular/router';
import { ChatRoom } from './core/chat/chat-room/chat-room';
import { PrivateChat } from './core/chat/private-chat/private-chat';


export const routes: Routes = [
    { path: '', component: ChatRoom },
    {path: 'chat', component: ChatRoom},
    {path: 'private', component: PrivateChat}
];
