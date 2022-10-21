import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectApplications } from "../../store/application.selectors";

@Component({
  selector: 'app-client-records',
  templateUrl: './client-records.component.html',
  styleUrls: ['./client-records.component.scss']
})
export class ClientRecordsComponent {
  readonly displayedColumns: string[] = ['date', 'vin', 'client'];
  readonly dataSource = this.store.select(selectApplications);

  constructor(private store: Store) { }


}
