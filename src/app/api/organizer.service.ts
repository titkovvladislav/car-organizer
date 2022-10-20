import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private http: HttpClient) { }

  getVin(): Observable<any> {
    return this.http.get('https://dev.dealon.pro/frontendTest/Car/');
  }
}
