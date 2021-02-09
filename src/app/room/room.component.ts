import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input() roomId: number = 1;
  isDoNotDisturb: boolean = false;
  guest: string = "Tobby Bobby Bob Brun";

  @Input() isAvailable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  call(): void {
    console.log("knock knock " + this.guest);
  }

  setIsDoNotDisturb(): void {
    this.isDoNotDisturb = !this.isDoNotDisturb;
  }
}
