import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HocbongComponent } from './hocbong.component';
import { HocbongRoutingModule } from './hocbong-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HocbongRoutingModule,
        NgxPaginationModule,
        LoadingBarRouterModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        HocbongComponent,
    ]
})
export class HocbongModule { }
