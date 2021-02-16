import { Component } from '@angular/core';
import { IRoom } from 'src/IRoom';
import { RoomService } from './Room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hotel';

  rooms: IRoom[];

  constructor(private roomService: RoomService) {
    this.rooms = this.roomService.rooms;
  }

}
