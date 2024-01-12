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

  textoTitulo: string = "Piante Pijamas";
  textoDetalhes: string = "Supor Promo";
  textoUrl: string = "Visite Piante.com.br para conhecer nosso produtos.";

  constructor() { 
    this.notificação = new Notification();
  }
  
  atualizarTextoTitulo(valor: string) {
    if(valor=='') {
      this.textoTitulo = "Piante Pijamas"
    } else {      
    this.textoTitulo = valor;
    }
  }


  atualizarTextoDetalhes(valor: string) {
    if(valor=='') {
      this.textoDetalhes = "Conheça nosso site!"
    } else {      
      this.textoDetalhes = valor;
    }   
  }

  atualizarTextoUrl(valor: string) {
    if(valor=='') {
      this.textoUrl = "https://piante.com.br/ \n https://www.instagram.com/piante.pijamas/";
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
