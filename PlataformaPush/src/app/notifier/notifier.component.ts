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
  
  atualizarTextoTitulo(valor: string) {
    if(valor=='') {
      this.textoTitulo = "Sem Titulo"
    } else {      
    this.textoTitulo = valor;
    }
  }


  atualizarTextoDetalhes(valor: string) {
    if(valor=='') {
      this.textoDetalhes = "Sem Descrição"
    } else {      
      this.textoDetalhes = valor;
    }   
  }

  atualizarTextoUrl(valor: string) {
    if(valor=='') {
      this.textoUrl = "Sem Url do anuncio"
    } else {      
      this.textoUrl = valor; 
    }  
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
