import { Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{
  constructor(private router: Router) {}

  navegarParaNotifier() {
    console.log('chamou notifier');
    this.router.navigate([{ outlets: { routerPainel: ['notifier'] } }]);
  }

  navegarParaDashboard() {
    console.log('chamou dash');
    this.router.navigate([{ outlets: { routerPainel: ['dashboard'] } }]);
  }

  ngOnInit(){
    this.navegarParaNotifier();
  }
}
