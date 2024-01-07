import { Component } from '@angular/core';
import { Notification } from '../model/notification/notification';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent {

  private notificação!: Notification;
  
  constructor() { 
    this.notificação = new Notification();
  }
  
  
  enviar(){
    this.notificação.idnotification = new Date();
    this.notificação.cardtitulo = 'titulo';
    this.notificação.detalhes = 'detalhes';
    this.notificação.link = 'novo link';
    
    console.log(this.notificação);
  }

  ngOnInit(){
   // this.enviar();
  }
  
  

}
