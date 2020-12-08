import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesFarmaciaComponent } from './pages/detalles-farmacia/detalles-farmacia.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'farmaciaDetalle', component: DetallesFarmaciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
