import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { StudentService } from './services/student.service';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ExportService } from './services/export.service';
import { ScoreService } from './services/score.service';
import { ClassNameService } from './services/class-name.service';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CoreModule,
    FormsModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
  }),
  ModalModule.forRoot()
  ],
  providers: [
    StudentService,
    ExportService,
    ScoreService,
    ClassNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
