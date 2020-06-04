import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { EditScoreComponent } from './edit-score/edit-score.component';


export const routes: Routes = [
    {
        path: '', component: StudentComponent,
    },
    {
        path: 'add', component: AddStudentComponent
    },
    {
        path: 'edit/:id', component: EditStudentComponent
    },
    {
        path: 'detail/:id', component: StudentDetailComponent
    },
    {
        path: 'editscore/:id', component: EditScoreComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentRoutingModule { }
