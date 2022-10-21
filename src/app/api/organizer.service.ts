import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private http: HttpClient) { }

  getVin(): Observable<Array<string>> {
    return this.http.get<Array<string>>('https://dev.dealon.pro/frontendTest/Car/');
  }

  getTime(date: string): Observable<Array<string>> {
    return this.http.get<Array<string>>(`https://dev.dealon.pro/frontendTest/Time/${date}`);
  }
}
