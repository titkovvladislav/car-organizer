import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { OrganizerService } from "../../api/organizer.service";
import { filter, map, Observable, Subject, switchMap, takeUntil } from "rxjs";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-application-registration',
  templateUrl: './application-registration.component.html',
  styleUrls: ['./application-registration.component.scss']
})
export class ApplicationRegistrationComponent implements OnInit, OnDestroy {

  applicationForm = this.fb.group({
    vin: ['', [Validators.required]],
    fullName: [''],
    phone: [''],
    address: [],
    date: [],
    time: []
  })

  vinList$!: Observable<Array<string>>;
  availableTime: Array<string> = [];
  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private fb: FormBuilder,
    public apiService: OrganizerService
  ) {
    this.vinList$ = apiService.getVin();
  }

  ngOnInit(): void {
    this.applicationForm.valueChanges.subscribe(console.log)

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
    console.log(this.applicationForm.value.date)
  }

}
