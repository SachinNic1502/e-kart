import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';
import { SliderComponent } from './slider/slider.component';
import { MatCardModule } from '@angular/material/card'; // Add this line
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class HomeModule { }
