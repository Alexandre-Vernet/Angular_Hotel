import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../Room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  @Input() roomId: number = 1;
  isDoNotDisturb: boolean = false;
  guest: string = 'Tobby Bobby Bob brun';

  @Input() isAvailable: boolean = false;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {}

  call(): void {
    console.log('knock knock ' + this.guest);
  }

  setIsDoNotDisturb(): void {
    this.isDoNotDisturb = !this.isDoNotDisturb;
  }

  orderBottle(bottleCount: any): void {
    console.log(`Alert quantity : ${bottleCount}`);
  }

  deleteRoom(): void {
    this.roomService.deleteRoom(this.roomId);
  }
}
