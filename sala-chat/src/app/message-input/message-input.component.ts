/* import { Component } from '@angular/core';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.css'
})
export class MessageInputComponent {

}
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="message-input">
      <h3>Usuario: {{ user }}</h3>
      <textarea [(ngModel)]="messageText" placeholder="Escribe tu mensaje..."></textarea>
      <button (click)="onSendMessage()">Guardar</button>
    </div>
  `
})
export class MessageInputComponent {
  @Input() user: string = "";
  @Output() sendMessage = new EventEmitter<{ user: string, text: string }>();

  messageText = '';

  onSendMessage() {
    if (this.messageText.trim()) {
      this.sendMessage.emit({ user: this.user, text: this.messageText });
      this.messageText = '';
    }
  }
}