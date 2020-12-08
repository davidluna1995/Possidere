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

  // variable inicial que guardara la respuesta de la consulta a la api
  farmaciasArreglo: Farmacia[] = [];
  // variable que ira cambiando de acuerdo a los filtros establecidos
  filterFarmaciasArreglo: Farmacia[] = [];
  // Set para rescatar las comunas en base a la api
  comunas = new Set();
  // Variable booleana con motivos de feedback login
  loading: boolean = false;

  constructor(private _farmaciasService: FarmaciasService) { }

  ngOnInit(): void {
    // Se hace la peticion a la api
    this.getFarmarmacias();
  }

  // Funcion para consultar la api a travez del servicio
  getFarmarmacias() {
    this._farmaciasService.getFarmacias().subscribe(response => {
      // Dar formato a la respuesta en json
      this.farmaciasArreglo = (JSON.parse(response.contents));
      // Llamada a la funcino para rescatar las comunas
      this.getNombreComunas();
    });
  }

  // Funcion que reccore el arreglo de farmacias mencionado anteriormente para asignar sus valores al Set asi evitando que se repitan valores
  getNombreComunas() {
    this.farmaciasArreglo.forEach(element => {
      this.comunas.add(element.comuna_nombre);
    });
  }

  // Funcion que genera el arreglo filtrado en base a los parametros del formulario
  filtrar(f: NgForm) {
    // Destructuracion de valores para asignarlos mas faciles
    const { comunaNombre, horaInicio, horaCierre } = f.value;
    // Filtrado
    this.filterFarmaciasArreglo = this.farmaciasArreglo.filter(
        farmacia => farmacia.comuna_nombre.toLowerCase().includes(comunaNombre.toLowerCase()) &&
        farmacia.funcionamiento_hora_apertura.toLowerCase().includes(horaInicio.toLowerCase()) &&
        farmacia.funcionamiento_hora_cierre.toLowerCase().includes(horaCierre.toLowerCase())
    );

    // En caso de que el filtro no encuentre coincidencias mostrar mensaje feedback de alerta
    if (this.filterFarmaciasArreglo.length == 0) {
      Swal.fire({
        title: 'No se econtraron resultados',
        text: 'Prueba otros rangos de hora y/o comuna.',
        icon: 'warning',
        confirmButtonText: 'Volver'
      })
    }
  }

}
