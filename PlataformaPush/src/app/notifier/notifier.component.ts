import { Component } from '@angular/core';
import { Notification } from '../model/notification/notification';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent {

  private notificação!: Notification;
  
  titulo: string = "Titulo";
  detalhes: string = "Detalhes";
  urlLink: string =  "Url anuncio";

  textoTitulo: string = "texto titulo";
  textoDetalhes: string = "Detalhes";
  textoUrl: string = "Url anuncio";

  constructor() { 
    this.notificação = new Notification();
  }
  
  atualizarTextoTitulo(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.textoTitulo = inputElement.value;
    
}


  
  ngOnInit(){
    // this.enviar();
   }
  
   




  
  /*
  enviar(){
    this.notificação.idnotification = new Date();
    this.notificação.cardtitulo = 'titulo';
    this.notificação.detalhes = 'detalhes';
    this.notificação.link = 'novo link';
    
    console.log(this.notificação);
  }
  */

  

}
