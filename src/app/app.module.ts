import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ColorizeDirective } from './colorize.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoubleClickDirective } from './double-click.directive';
import { DialogElement } from './double-click.directive';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import {MatIconModule} from '@angular/material/icon';
import { SortPipe } from './sort.pipe';
import { SortParamsDirective } from './sort-params.directive';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ColorizeDirective,
    DialogElement,
    DoubleClickDirective,
    SortPipe,
    SortParamsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OverlayModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
