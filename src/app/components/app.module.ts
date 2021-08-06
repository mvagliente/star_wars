import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../components/app-routing.module';
import { AppComponent } from '../components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Dialogpilot, SpaceshipsComponent } from '../components/spaceships/spaceships.component';
import { NavigationService } from '../services/NavigationService';
import { SpaceshipsService } from './spaceships/spaceships.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfigService } from '../services/ApiConfigService';
import { MatTableModule, MatSortModule, MatDialogModule, MatCheckboxModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatPaginatorModule, MatAccordion, MatExpansionModule, MatListModule } from "@angular/material";
import { HomeComponent } from './home/home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsComponent,
    Dialogpilot,
    HomeComponent
  ],
  entryComponents: [
    Dialogpilot
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule, 
    NgxSpinnerModule
  ],
  providers: [NavigationService,SpaceshipsService,ApiConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
