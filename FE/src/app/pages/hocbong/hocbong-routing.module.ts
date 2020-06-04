import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HocbongComponent } from './hocbong.component';


export const routes: Routes = [
    {
        path: '', component: HocbongComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HocbongRoutingModule { }
