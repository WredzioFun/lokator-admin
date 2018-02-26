import { Component, OnInit } from '@angular/core';
import {FadeInTop} from "../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
