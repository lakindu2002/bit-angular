import { Component } from '@angular/core';
import { ButtonModule } from './button.module';

@Component({
  standalone: true,
  selector: 'button-composition-cmp',
  imports: [ButtonModule],
  template: `Button composition: <button
    [label]="'Sample Button'"
  ></button>`
})
export class ButtonCompositionComponent { }
