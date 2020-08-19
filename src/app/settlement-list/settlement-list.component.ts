import { Component, OnInit } from '@angular/core';
import {ClientService} from '../service/client/client.service';
import {SettlementService} from '../service/settlement/settlement.service';

@Component({
  selector: 'app-settlement-list',
  templateUrl: './settlement-list.component.html',
  styleUrls: ['./settlement-list.component.css']
})
export class SettlementListComponent implements OnInit {
  settlements: Array<any>;
  constructor(private settlementService: SettlementService) { }

  ngOnInit(): void {
    this.settlementService.getAll().subscribe((data) => {
      this.settlements = data;
    });
  }
}
