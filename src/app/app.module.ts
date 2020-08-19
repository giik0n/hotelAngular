import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientListComponent } from './client-list/client-list.component';
import { RoomListComponent } from './room-list/room-list.component';
import { SettlementListComponent } from './settlement-list/settlement-list.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { AppRoutingModule} from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    RoomListComponent,
    SettlementListComponent,
    ClientEditComponent,
    ClientAddComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
