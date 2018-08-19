import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PortfolioUpdateComponent } from '../update/update.component';
import { ChangelogComponent } from '../models/changelog/changelog.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioUpdateComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
