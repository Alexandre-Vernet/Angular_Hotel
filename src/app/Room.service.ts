import { Injectable } from '@angular/core';
import { IRoom } from "../IRoom";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  rooms: IRoom[] = [
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
