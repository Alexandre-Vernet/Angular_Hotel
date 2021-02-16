import { Component } from '@angular/core';
import { RoomService } from './Room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel';

  rooms: {id: number}[];

  constructor(private roomService: RoomService) {
    this.rooms = this.roomService.rooms;
   }

}
