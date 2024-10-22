import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'imagenes', component: ImagenesComponent },
  { path: 'detalles', component: DetallesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
