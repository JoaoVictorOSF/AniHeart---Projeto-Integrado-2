import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { SwiperModule } from "swiper/angular";
import { SwiperVerticalComponent } from "./swiper-vertical.component";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, SwiperModule],
  declarations: [SwiperVerticalComponent],
  bootstrap: [SwiperVerticalComponent],
  exports: [SwiperVerticalComponent, CommonModule]
})
export class SwiperVerticalModule { }
