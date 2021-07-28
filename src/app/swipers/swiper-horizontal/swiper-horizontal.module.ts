import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { SwiperModule } from "swiper/angular";
import { SwiperHorizontalComponent } from "./swiper-horizontal.component";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, SwiperModule],
  declarations: [SwiperHorizontalComponent],
  bootstrap: [SwiperHorizontalComponent],
  exports: [SwiperHorizontalComponent, CommonModule]
})
export class SwiperHorizontalModule {}
