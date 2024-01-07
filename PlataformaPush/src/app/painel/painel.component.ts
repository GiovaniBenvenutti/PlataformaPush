import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
  constructor(private painelRouter: Router) {}

  navegarParaNotifier() {
    console.log('chamou notifier');    
    this.painelRouter.navigate(['painel/notifier']);
  }

  navegarParaDashboard() {
    console.log('chamou dash');
    this.painelRouter.navigate(['painel/dashboard']);
  }

  navegarParaAuth(){
    console.log('chamou auth');
    this.painelRouter.navigate(['auth']);

  }

  ngOnInit(){
    this.navegarParaNotifier();
  }
}
