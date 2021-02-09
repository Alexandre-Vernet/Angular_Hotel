import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FormsModule } from '@angular/forms';
import { FridgeComponent } from './fridge/fridge.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FridgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
