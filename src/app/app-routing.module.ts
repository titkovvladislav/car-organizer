import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRegistrationComponent } from "./pages/application-registration/application-registration.component";
import { ClientRecordsComponent } from "./pages/client-records/client-records.component";

const routes: Routes = [
  { path: 'registration', component: ApplicationRegistrationComponent },
  { path: 'records', component: ClientRecordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
