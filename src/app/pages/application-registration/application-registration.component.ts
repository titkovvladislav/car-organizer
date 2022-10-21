import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { OrganizerService } from "../../api/organizer.service";
import { filter, map, Observable, Subject, switchMap, takeUntil } from "rxjs";
import { formatDate } from "@angular/common";
import { Store } from "@ngrx/store";
import { addApplication } from "../../store/applications.actions";

@Component({
  selector: 'app-application-registration',
  templateUrl: './application-registration.component.html',
  styleUrls: ['./application-registration.component.scss']
})
export class ApplicationRegistrationComponent implements OnInit, OnDestroy {

  applicationForm = this.fb.group({
    vin: ['', [Validators.required]],
    fullName: ['',[Validators.required]],
    phone: ['',[Validators.required]],
    address: ['',[Validators.required]],
    date: ['',[Validators.required]],
    time: ['',[Validators.required]]
  })

  vinList$!: Observable<Array<string>>;
  availableTime: Array<string> = [];
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private fb: FormBuilder,
    public apiService: OrganizerService,
    private store: Store
  ) {
    this.vinList$ = apiService.getVin();
  }

  ngOnInit(): void {
    this.applicationForm.controls.date.valueChanges
      .pipe(
        filter(Boolean),
        map(date => formatDate(date, 'yyyy-MM-dd','en-US')),
        switchMap( date => this.apiService.getTime(date)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(time => this.availableTime = time)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  save(): void {
    this.store.dispatch(addApplication({ application: this.applicationForm.value}));
    this.applicationForm.reset();
  }

}
