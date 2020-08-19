import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { NgForm } from '@angular/forms';
import {ClientService} from '../service/client/client.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, OnDestroy {
  client: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService
             ) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.clientService.get(id).subscribe((client: any) => {
          if (client) {
            this.client = client;
            this.client.href = client._links.self.href;
          } else {
            console.log(`Client with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  gotoList(): void {
    this.router.navigate(['/client-list']);
  }

}
