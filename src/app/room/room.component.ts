import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  roomId: number = 1;
  isDoNotDisturb: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  call(): void {
    console.log("DRING DRING");
  }

  setIsDoNotDisturb(): void {
    this.isDoNotDisturb = !this.isDoNotDisturb;
  }
}
