import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PlataformaPush';


  constructor(
    private router: Router, 
    //private swUpDate: SwUpdate
  ){}

  navigateTo(route: string) {
    this.router.navigate([route]);    
  }  

  /*
  reloadCache(){
    if(this.swUpDate.isEnabled){
      this.swUpDate.available.subscribe(() =>{
        if(confirm('nova versão disponivel, atualizar?')){
          window.location.reload();
        }
      })
    }
  }

  ngOnInit(){
    this.reloadCache();
  }
  */
    


}
