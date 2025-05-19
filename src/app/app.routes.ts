import { Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { AddClientComponent } from './components/add-client/add-client.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-client', component: AddClientComponent }
];
