import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
