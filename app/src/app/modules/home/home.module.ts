import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  declarations: [HomePage],
})
export class HomeModule {}
