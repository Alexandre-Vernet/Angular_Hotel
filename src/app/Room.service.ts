import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

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
