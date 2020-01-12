import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../matrial.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeRoutingModule} from './home-routing/home-routing.module';
// MDB Angular Free
import { WavesModule, TableModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    WavesModule,
    TableModule,
    FormsModule
  ]
})
export class HomeModule { }
