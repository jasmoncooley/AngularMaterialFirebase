import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveChatWidgetModel, LiveChatWidgetApiModel } from '@livechat/angular-widget';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  public isLiveChatWidgetLoaded: boolean = true;
  public liveChatApi: LiveChatWidgetApiModel;
  public visitor: { name: string; email: string};
  public params: { name: string; value: string}[];

  @ViewChild('liveChatWidget', {static: false}) public liveChatWidget: LiveChatWidgetModel;

  constructor() {

    this.visitor = {
      name: 'John Doe',
      email: 'john@doe.com',
    };

    this.params = [
      { name: 'Login', value: 'joe_public' },
      { name: 'Account ID', value: 'ABCD1234' },
      { name: 'Total order value', value: '$123' }
    ];
    
    
  }

  onChatLoaded(api: LiveChatWidgetApiModel): void {
    this.liveChatApi = api;
    this.isLiveChatWidgetLoaded = true;



    // Sometimes it can happen that LC_Invite is is still being loaded when onChatLoaded is called. To ensure that LC_Invite is loaded you can give additional check to onChatLoaded function:
    // api.on_after_load = () => {
    //   this.liveChatApi = api;
    //   this.isLiveChatWidgetLoaded = true;
    // };
  }

  onChatWindowMinimized() {
    console.log('minimized')
  }

  onChatWindowOpened() {
    console.log('opened')
    console.log(this.liveChatWidget);

  }

  openChatWindow(): void {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.openChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation 
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.open_chat_window();
    };
  }

  hideChatWindow() {
    if (this.isLiveChatWidgetLoaded) {
      this.liveChatWidget.minimizeChatWindow();

      // You can also use methods directly on liveChatApi instance
      // for more details plese read our documentation 
      // https://developers.livechatinc.com/docs/extending-ui/extending-chat-widget/javascript-api/#methods
      // this.liveChatApi.minimize_chat_window();
    };
  }



  ngOnInit() {
    this.openChatWindow();
  }

}
