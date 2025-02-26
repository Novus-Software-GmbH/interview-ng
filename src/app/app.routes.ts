import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BuildingListComponent} from "./building-list/building-list.component";

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'building', component: BuildingListComponent
  },
  {
    path: '**', component: HomeComponent
  }
];
