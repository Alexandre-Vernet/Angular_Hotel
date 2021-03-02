import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceptionComponent } from './reception/reception.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {
    path: '',
    component: ReceptionComponent,
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
  },
  {
    path: 'room',
    component: RoomComponent,
  },
  {
    path: '**',
    component: ReceptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
