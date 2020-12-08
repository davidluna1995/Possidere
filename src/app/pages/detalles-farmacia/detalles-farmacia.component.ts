import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FarmaciasService } from 'src/app/services/farmacias.service';

@Component({
  selector: 'app-detalles-farmacia',
  templateUrl: './detalles-farmacia.component.html',
  styleUrls: ['./detalles-farmacia.component.css']
})
export class DetallesFarmaciaComponent implements OnInit {

  src: string;
  urlConfiable;

  constructor(public _farmaciaService: FarmaciasService,
              private _location: Location,
              private sanatizer: DomSanitizer,
              router: Router) {

    if(!_farmaciaService.farmaciaSelect){
      router.navigate(['']);
    }
    this.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAtNl374R6YyIBt652giFWgMexjENUf6ic&q=
                ${_farmaciaService.farmaciaSelect.local_lat},
                ${_farmaciaService.farmaciaSelect.local_lng}`;
    this.urlConfiable = sanatizer.bypassSecurityTrustResourceUrl(this.src);
  }

  ngOnInit(): void {
  }

  volverUrl(){
    this._location.back();
  }

}
