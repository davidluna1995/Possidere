import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Farmacia } from 'src/app/models/farmacia.model';
import { FarmaciasService } from 'src/app/services/farmacias.service';

@Component({
  selector: 'app-resultados-buscador',
  templateUrl: './resultados-buscador.component.html',
  styleUrls: ['./resultados-buscador.component.css']
})
export class ResultadosBuscadorComponent implements OnInit {

  @Input() farmaciasFilter: Farmacia[] = [];
  p: number = 1;

  constructor(
              private _farmaciasService: FarmaciasService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  visualizarDatos(farmacia: Farmacia){
    this._farmaciasService.farmaciaSelect = farmacia;
    localStorage.setItem('farmacia', JSON.stringify(farmacia));
    this.router.navigate(['farmaciaDetalle']);
  }

}
