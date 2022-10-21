import { Component, OnInit } from '@angular/core';

export interface ApplicationI {
  date: string;
  time: string;
  vin: string;
  fullName: string;
  phone: string;
  address: string;
}
const ELEMENT_DATA: ApplicationI[] = [
  {date: '20.20.2020', time: '12:00', vin: '651sfssf', fullName: 'Ivan Ivanovich Ivanov', phone: '+76165165165', address: 'Rostov'},
  {date: '21.20.2020', time: '13:00', vin: '651sfssf', fullName: 'Ivan Ivanovich Ivanov', phone: '+76165165165', address: 'Rostov'},
  {date: '22.20.2020', time: '14:00', vin: '651sfssf', fullName: 'Ivan Ivanovich Ivanov', phone: '+76165165165', address: 'Rostov'},
  {date: '23.20.2020', time: '15:00', vin: '651sfssf', fullName: 'Ivan Ivanovich Ivanov', phone: '+76165165165', address: 'Rostov'},
  {date: '24.20.2020', time: '16:00', vin: '651sfssf', fullName: 'Ivan Ivanovich Ivanov', phone: '+76165165165', address: 'Rostov'},
];

@Component({
  selector: 'app-client-records',
  templateUrl: './client-records.component.html',
  styleUrls: ['./client-records.component.scss']
})
export class ClientRecordsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'vin', 'client'];
  dataSource = ELEMENT_DATA

  constructor() { }

  ngOnInit(): void {
  }

}
