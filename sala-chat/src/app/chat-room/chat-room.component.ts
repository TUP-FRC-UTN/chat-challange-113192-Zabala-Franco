/* import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [],
  templateUrl: './chat-room.component.html',
  styleUrl: './chat-room.component.css'
})
export class ChatRoomComponent {

}
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageInputComponent } from '../message-input/message-input.component';

interface Message {
  user: string;
  text: string;
}

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CommonModule, MessageInputComponent],
  template: `
    <div class="chat-room">
      <h2>Conversación</h2>
      <div class="messages">
        <p *ngFor="let msg of messages">
          <strong>{{ msg.user }}:</strong> {{ msg.text }}
        </p>
      </div>
      <app-message-input 
        *ngFor="let user of users" 
        [user]="user"
        (sendMessage)="onSendMessage($event)"
      ></app-message-input>
    </div>
  `
})
export class ChatRoomComponent {
  users = ['Pepe', 'María'];
  messages: Message[] = [];

  onSendMessage(message: Message) {
    this.messages.push(message);
  }
}