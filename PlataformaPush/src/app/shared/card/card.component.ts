
import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TextComponent } from '../text/text.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, TextComponent],
})
export class CardComponent {

  @Input() tituloCard: string = "Titulo aqui";
  @Input() detalhesCard: string = "Detalhes aqui";
  @Input() urlLinkCard: string = "piante modas.com aqui";


}
