import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
