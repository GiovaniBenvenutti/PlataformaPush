import {Component, NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, CommonModule ]
})
export class TextComponent {
  value = '';
  focus: Boolean = false;

  onFocus() {
    if(this.value!=''){
      this.focus = true;
    }
  }

  onBlur() {
    this.focus = false;
  }

  onClick() {
    this.value = '';
  }
}
