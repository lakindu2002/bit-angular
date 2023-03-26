import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
  Custom Component: <button
    label="'Custom Button!'"
  ></button>
</h1>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
}
