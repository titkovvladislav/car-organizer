import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private http: HttpClient) { }

  getVin(): Observable<Array<string>> {
    return this.http.get<Array<string>>(environment.vinUrl);
  }

  getTime(date: string): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${environment.timeUrl}${date}`);
  }
}
