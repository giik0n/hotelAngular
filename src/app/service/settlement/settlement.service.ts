import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettlementService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('https://pan-edu-hotel.herokuapp.com/api/settlement/v2/');
  }

  deleteSettlement(id: string): Observable<any>{
    return  this.http.delete('https://pan-edu-hotel.herokuapp.com/api/settlement/v2/' + id);
  }

  get(id: string): Observable<any> {
    return this.http.get('https://pan-edu-hotel.herokuapp.com/api/settlement/v2/' + id);
  }
}

