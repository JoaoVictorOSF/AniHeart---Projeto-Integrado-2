import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Lazy, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation]);

@Component({
  selector: "app-swiper-horizontal",
  templateUrl: './swiper-horizontal.component.html',
  styleUrls: ["./swiper-horizontal.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperHorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
