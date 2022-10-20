import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { OrganizerService } from "../../api/organizer.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-application-registration',
  templateUrl: './application-registration.component.html',
  styleUrls: ['./application-registration.component.scss']
})
export class ApplicationRegistrationComponent implements OnInit {

  applicationForm = this.fb.group({
    vin: ['', [Validators.required]],
    fullName: [''],
    phone: [''],
    address: [],
    date: []
  })

  vinList!: Observable<any>;

  constructor( private fb: FormBuilder, public apiService: OrganizerService) {
    this.vinList = apiService.getVin()
  }

  ngOnInit(): void {
    this.applicationForm.valueChanges.subscribe(console.log)
  }
}
