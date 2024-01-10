import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, CommonModule ]
})
export class TextComponent {

  @Input() textLabel: string = "Seu input aqui";
  textValue = new Subject<string>();
  inputValue: string = '';

  onKey(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputValue = inputElement.value;
    this.textValue.next(this.inputValue);
}

  onClick() {
    this.inputValue = '';
  }

}
