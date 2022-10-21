import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectApplications } from "./application.selectors";
import { Observable } from "rxjs";
import { ApplicationI } from "../shared/models/application.model";
import { addApplication } from "./applications.actions";

@Injectable({ providedIn: 'root' })
export class ApplicationFacade {

  private _applications$: Observable<readonly ApplicationI[]> = this.store.select(selectApplications);

  constructor(
    private readonly store: Store
  ) {}

  addApplication(application: ApplicationI): void {
    this.store.dispatch(addApplication({ application}));
  }

  get applications$(): Observable<readonly ApplicationI[]>{
    return this._applications$;
  }

}
