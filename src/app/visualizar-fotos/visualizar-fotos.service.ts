import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFoto } from '../shared/foto';

@Injectable()
export class VisualizarFotosService {

  constructor(private http:HttpClient) { }

  getFotos() : Observable<HttpResponse<IFoto[]>>{
    let url : string= 'https://jsonplaceholder.typicode.com/photos';
    return this.http.get<IFoto[]>(url,{observe:'response'});
  }

  getFoto(id :number) : Observable<HttpResponse<IFoto[]>>{
    let url : string= 'https://jsonplaceholder.typicode.com/photos?albumId='+id;
    return this.http.get<IFoto[]>(url,{observe:'response'});
  }

}
