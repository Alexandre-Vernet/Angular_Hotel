import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRoom } from 'src/IRoom';
import { RoomService } from './Room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Hotel';
  rooms!: IRoom[];
  roomSubscription!: Subscription;

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomSubscription = this.roomService.rooms$.subscribe(
      (room: IRoom[]) => {
        this.rooms = room;
      }
    );
  }

  ngOnDestroy() {
    if (this.roomSubscription) this.roomSubscription.unsubscribe();
  }
}
