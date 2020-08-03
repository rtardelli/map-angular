import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { from } from 'rxjs';
import { MapviewerComponent } from './mapviewer/mapviewer.component';
import { MapLoaderComponent } from './map-loader/map-loader.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    MapviewerComponent,
    MapLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
