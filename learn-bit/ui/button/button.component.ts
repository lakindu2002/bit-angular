import { Component, Input } from '@angular/core';

@Component({
  selector: 'button',
  template: `
    <p>
    {{label}}
    </p>
`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input('label') label = 'Hello, World!'

  constructor() { }
}
