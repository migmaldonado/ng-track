import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogBoardComponent } from './log-board/log-board.component';
import { MousepadComponent } from './mousepad/mousepad.component';

@NgModule({
  declarations: [
    AppComponent,
    LogBoardComponent,
    MousepadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
