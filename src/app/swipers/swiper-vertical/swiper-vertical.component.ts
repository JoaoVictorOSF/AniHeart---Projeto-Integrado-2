import { Component, ViewEncapsulation, ViewChild, OnInit } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: "app-swiper-vertical",
  templateUrl: './swiper-vertical.component.html',
  styleUrls: ["./swiper-vertical.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperVerticalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
