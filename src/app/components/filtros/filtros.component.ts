import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Farmacia } from 'src/app/models/farmacia.model';
import { FarmaciasService } from 'src/app/services/farmacias.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  farmaciasArreglo: Farmacia[] = [];
  filterFarmaciasArreglo: Farmacia[] = [];
  comunas = new Set();
  loading: boolean = false;

  constructor(private _farmaciasService: FarmaciasService) { }

  ngOnInit(): void {
    this.getFarmarmacias();
  }

  getFarmarmacias() {
    this._farmaciasService.getFarmacias().subscribe(response => {
      this.farmaciasArreglo = (JSON.parse(response.contents));
      this.getNombreComunas();
    });
  }

  getNombreComunas() {
    this.farmaciasArreglo.forEach(element => {
      this.comunas.add(element.comuna_nombre);
    });
  }

  filtrar(f: NgForm) {
    const { comunaNombre, horaInicio, horaCierre } = f.value;
    this.filterFarmaciasArreglo = this.farmaciasArreglo.filter(
        farmacia => farmacia.comuna_nombre.toLowerCase().includes(comunaNombre.toLowerCase()) &&
        farmacia.funcionamiento_hora_apertura.toLowerCase().includes(horaInicio.toLowerCase()) &&
        farmacia.funcionamiento_hora_cierre.toLowerCase().includes(horaCierre.toLowerCase())
    );

    if (this.filterFarmaciasArreglo.length == 0) {
      Swal.fire({
        title: 'No se econtraron resultados',
        text: 'Prueba otros rangos de hora y/o comuna.',
        icon: 'warning',
        confirmButtonText: 'Volver'
      })
    }
    // console.log(this.filterFarmaciasArreglo);
  }

}
