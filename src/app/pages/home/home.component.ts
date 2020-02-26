import { Component } from '@angular/core';
import { ChatbotComponent } from 'src/app/components/blocks/chatbot/chatbot.component';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {

  public onToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  constructor(public Chatbot: ChatbotComponent) {

  }



}
  // console.log(firebase.auth().currentUser);
