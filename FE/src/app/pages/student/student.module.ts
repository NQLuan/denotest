import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EditScoreComponent } from './edit-score/edit-score.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StudentRoutingModule,
        NgxPaginationModule,
        LoadingBarRouterModule,
        BsDatepickerModule.forRoot()
    ],
    declarations: [
        StudentComponent,
        AddStudentComponent,
        EditStudentComponent,
        StudentDetailComponent,
        EditScoreComponent
    ]
})
export class StudentModule { }
