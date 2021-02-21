import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/Room.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss'],
})
export class RoomCreateComponent implements OnInit {
  constructor(private roomService: RoomService) {}

  ngOnInit() {}

  addRoom(): void {
    this.roomService.addRoom();
  }
}
