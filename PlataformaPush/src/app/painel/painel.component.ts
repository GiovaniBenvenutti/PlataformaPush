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
    this.router.navigate([{ outlets: { routerPainel: ['notifier'] } }]);
  }

  navegarParaDashboard() {
    this.router.navigate([{ outlets: { routerPainel: ['dashboard'] } }]);
  }

  ngOnInit(){
    //this.navegarParaNotifier();
  }
}
