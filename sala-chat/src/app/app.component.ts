/* import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sala-chat';
}
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room/chat-room.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChatRoomComponent],
  template: `
    <h1>Sala de Chat</h1>
    <app-chat-room></app-chat-room>
  `
})
export class AppComponent { }