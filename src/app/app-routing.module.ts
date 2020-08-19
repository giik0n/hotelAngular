import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {RoomListComponent} from './room-list/room-list.component';
import {SettlementListComponent} from './settlement-list/settlement-list.component';
import {ClientEditComponent} from './client-edit/client-edit.component';
import {ClientAddComponent} from './client-add/client-add.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: 'client-list',
    component: ClientListComponent
  },
  {
    path: 'room-list',
    component: RoomListComponent
  },
  {
    path: 'settlement-list',
    component: SettlementListComponent
  },
  {
    path: 'client-add',
    component: ClientAddComponent
  },
  {
    path: 'client-edit/:id',
    component: ClientEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
