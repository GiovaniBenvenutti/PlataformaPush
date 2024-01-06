import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
  constructor(private painelRouter: Router) {}

  navegarParaNotifier() {
    console.log('chamou notifier');
    this.painelRouter.navigate(['notifier']);
  }

  navegarParaDashboard() {
    console.log('chamou dash');
    this.painelRouter.navigate(['dashboard']);
  }

  ngOnInit(){
    this.navegarParaNotifier();
  }
}
