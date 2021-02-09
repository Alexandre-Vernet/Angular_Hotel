import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel';

  rooms: { id: number }[] = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
  ];
}
