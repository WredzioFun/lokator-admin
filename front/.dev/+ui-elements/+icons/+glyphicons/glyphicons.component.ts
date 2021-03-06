import {Component, OnInit, ElementRef} from '@angular/core';
import {FadeInTop} from "../../../../src/app/shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'sa-glyphicons',
  templateUrl: './glyphicons.component.html',
  styleUrls: ['./glyphicons.component.css']
})
export class GlyphiconsComponent implements OnInit {

  constructor(private el:ElementRef) {
  }

  containers:any

  ngOnInit() {
    this.containers = this.el.nativeElement.querySelectorAll('.bs-glyphicons li')
  }

  search = '';


  onKey(event:any) {
    this.search = event.target.value;

    Array.prototype.forEach.call(this.containers, (container)=> {
      if (container.querySelectorAll('[class*="' + this.search + '"]').length > 0) {
        container.style.display = 'block'
      } else {
        if (this.search) {
          container.style.display = 'none'
        } else {
          container.style.display = 'block'
        }
      }
    })
  }

}
