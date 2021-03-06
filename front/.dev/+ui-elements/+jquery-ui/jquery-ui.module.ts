import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqueryUiRouting } from './jquery-ui.routing';
import {JqueryUiComponent} from "./jquery-ui.component";
import {SmartadminModule} from "../../../src/app/shared/smartadmin.module";
import {JqueryUiModule} from "../../../src/app/shared/ui/jquery-ui/jquery-ui.module";

@NgModule({
  imports: [
    CommonModule,
    jqueryUiRouting,
    SmartadminModule,

    JqueryUiModule,

  ],
  declarations: [JqueryUiComponent]
})
export class JqueryUiShowcaseModule { }
