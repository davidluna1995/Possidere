import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { HomeComponent } from './pages/home/home.component';
import { DetallesFarmaciaComponent } from './pages/detalles-farmacia/detalles-farmacia.component';
import { ResultadosBuscadorComponent } from './components/resultados-buscador/resultados-buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FiltrosComponent,
    HomeComponent,
    DetallesFarmaciaComponent,
    ResultadosBuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
