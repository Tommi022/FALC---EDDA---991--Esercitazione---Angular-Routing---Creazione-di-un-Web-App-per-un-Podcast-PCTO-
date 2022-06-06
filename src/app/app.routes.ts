import { Routes } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { TerzoComponent } from './terzo/terzo.component'
export const AppRoutes: Routes = [
  { path: '', component: PrimoComponent },
  { path: 'secondo', component: SecondoComponent },
  { path: 'terzo/:id', component: TerzoComponent }
];