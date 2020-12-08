import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmaciasService {

  farmaciaSelect: any;

  constructor(private _http: HttpClient) { }

  getFarmacias(): Observable<any>{
    const url = `https://api.allorigins.win/get?url=https://farmanet.minsal.cl/maps/index.php/ws/getLocalesRegion?id_region=7`;

    return this._http.get(url);
  }
}
