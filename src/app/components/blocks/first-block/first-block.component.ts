import { Component } from '@angular/core';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss']
})
export class FirstBlockComponent {
  titleOne = 'Starter kit';
  contentOne = 'Angular 8 | Material Design | Firebase (OAuth authentication and NoSQL database)';
  constructor(public Chatbot: ChatbotComponent) {

  }
}
