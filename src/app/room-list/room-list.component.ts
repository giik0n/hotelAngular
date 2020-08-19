import { Component, OnInit } from '@angular/core';
import {RoomService} from '../service/room/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  clients: Array<any>;
  rooms: any;
  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getAll().subscribe((data) => {
      this.rooms = data;
    });
  }
}
