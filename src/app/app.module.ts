import { PentatonicsComponent } from './pages/pentatonics/pentatonics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MajorComponent } from './pages/pentatonics/major/major.component';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    PentatonicsComponent,
    MajorComponent,
    HomeComponent,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    BrowserModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
