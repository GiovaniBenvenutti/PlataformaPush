
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

  @Input() titulo: string = "Titulo aqui";
  @Input() detalhes: string = "Detalhes aqui";
  @Input() urlLink: string = "piante modas.com aqui";




  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
