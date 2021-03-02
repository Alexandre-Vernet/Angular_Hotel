import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FormsModule } from '@angular/forms';
import { FridgeComponent } from './fridge/fridge.component';
import { RoomCreateComponent } from './room-create/room-create.component';
import { ReceptionComponent } from './reception/reception.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [		
    AppComponent,
    RoomComponent,
    FridgeComponent,
    RoomCreateComponent,
      ReceptionComponent,
      RestaurantComponent
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
