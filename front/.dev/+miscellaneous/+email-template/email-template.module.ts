import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailTemplateRoutingModule } from './email-template-routing.module';
import { EmailTemplateComponent } from './email-template.component';
import {SmartadminLayoutModule} from "../../../src/app/shared/layout/layout.module";
import {StatsModule} from "../../../src/app/shared/stats/stats.module";

@NgModule({
  imports: [
    CommonModule,
    EmailTemplateRoutingModule,

    SmartadminLayoutModule,
    StatsModule,
  ],
  declarations: [EmailTemplateComponent]
})
export class EmailTemplateModule { }
