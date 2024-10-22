import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    ContactosComponent,
    ImagenesComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
