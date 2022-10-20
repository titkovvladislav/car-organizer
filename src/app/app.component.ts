import { Component } from '@angular/core';

export interface linkI {
  title: string;
  path: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manager-organizer';
  links: Array<linkI> = [
    { title: 'Registration', path: '/registration' },
    { title: 'Records', path: '/records' }
  ];
  activeLink = '';
}
