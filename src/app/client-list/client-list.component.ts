import { Component, OnInit } from '@angular/core';
import {ClientService} from '../service/client/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Array<any>;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll().subscribe((data) => {
      this.clients = data;
    });
  }
}
