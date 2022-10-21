import { Component } from '@angular/core';
import { ApplicationFacade } from "../../store/application.facade";
import { Observable } from "rxjs";
import { ApplicationI } from "../../shared/models/application.model";

@Component({
  selector: 'app-client-records',
  templateUrl: './client-records.component.html',
  styleUrls: ['./client-records.component.scss']
})
export class ClientRecordsComponent {
  readonly displayedColumns: string[] = ['date', 'vin', 'client'];
  readonly dataSource$: Observable<readonly ApplicationI[]> = this.facade.applications$;

  constructor(private facade: ApplicationFacade) { }
}
