import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisibleComponent } from './visible/visible.component';
import { ElaspedTimeService } from './services/elasped-time.service';

@NgModule({
  declarations: [
    AppComponent,
    VisibleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [ElaspedTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
