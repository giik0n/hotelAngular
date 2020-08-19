import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('https://pan-edu-hotel.herokuapp.com/api/client/v2/');
  }
  deleteClient(id: string): Observable<any>{
    return  this.http.delete('https://pan-edu-hotel.herokuapp.com/api/client/v2/' + id);
  }

  get(id: string): Observable<any> {
    return this.http.get('https://pan-edu-hotel.herokuapp.com/api/client/v2/' + id);
  }
}

