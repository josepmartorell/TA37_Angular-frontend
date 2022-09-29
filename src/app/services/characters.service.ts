import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'https://rickandmortyapi.com/api/character/'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  v1: number = 1;
  v2: number = 1;
  v3: number = 1;
  v4: number = 1;
  v5: number = 1;
  v6: number = 1;
  v7: number = 1;
  v8: number = 1;
  v9: number = 1;
  v10: number = 1;
  v11: number = 1;
  v12: number = 1;

  constructor(private http:HttpClient) { 
    this.v1 = this.retornarAleatorio();
    this.v2 = this.retornarAleatorio();
    this.v3 = this.retornarAleatorio();
    this.v4 = this.retornarAleatorio();
    this.v5 = this.retornarAleatorio();
    this.v6 = this.retornarAleatorio();
    this.v7 = this.retornarAleatorio();
    this.v8 = this.retornarAleatorio();
    this.v9 = this.retornarAleatorio();
    this.v10 = this.retornarAleatorio();
    this.v11 = this.retornarAleatorio();
    this.v12 = this.retornarAleatorio();
  }

  getAll(): Observable<any[]>{
    return this.http.get<any[]>(apiUrl+this.v1 
      + ', ' + this.v2 
      + ', ' + this.v3 
      + ', ' + this.v4 
      + ', ' + this.v5
      + ', ' + this.v6 
      + ', ' + this.v7 
      + ', ' + this.v8 
      + ', ' + this.v9
      + ', ' + this.v10
      + ', ' + this.v11
      + ', ' + this.v12);
  }

  get(id:any):Observable<any>{
    return this.http.get(`${apiUrl}/${id}`);
  }

  create(datos:any): Observable<any>{
    return this.http.post(apiUrl,datos);
  }

  update(id:any,datos:any):Observable<any>{
    return this.http.put(`${apiUrl}/${id}`,datos);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${apiUrl}/${id}`);
  }

  retornarAleatorio() {
    return Math.trunc(Math.random() * 862) + 1;
  }

}