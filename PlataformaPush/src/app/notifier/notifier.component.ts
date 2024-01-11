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
  detalhes: string = "Descrição";
  urlLink: string =  "Url anuncio";

  textoTitulo: string = "texto titulo";
  textoDetalhes: string = "Detalhes longos";
  textoUrl: string = "Url anuncio aqui";

  constructor() { 
    this.notificação = new Notification();
  }
  
  atualizarTextoTitulo(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.textoTitulo = inputElement.value; 
    console.log(this.textoTitulo);   
  }

  atualizarTextoDetalhes(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.textoDetalhes = inputElement.value;    
  }

  atualizarTextoUrl(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.textoUrl = inputElement.value;    
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
