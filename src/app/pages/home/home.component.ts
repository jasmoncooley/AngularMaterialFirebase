import { Component } from '@angular/core';
import { ChatbotComponent } from 'src/app/components/blocks/chatbot/chatbot.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [`
  button {
    position: fixed;
    bottom: 70px;
    float: right;
    right: 10px;
    z-index: 10;
  }`]
})

export class HomeComponent {

  public onToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  constructor(public Chatbot: ChatbotComponent) {

  }

}
