import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';


const URL = environment.url_server;

const APIKEY = environment.api_key;

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string []=[];

  resultados:Gif[]=[];

  get historial(){

    return [...this._historial];
  }

  constructor(private http:HttpClient) { 

  

  }

  buscarGifs(query:string=""){
    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){


this._historial.unshift(query);
this._historial = this._historial.splice(0,10);


    }



    const params = new HttpParams( )

    .set("api_key",APIKEY)
    .set("limit",20)
    .set("q",query);



this.http.get<SearchGifsResponse>(`${URL}`,{params}).subscribe(res=>{

this.resultados = res.data;



console.log(res.data);

})

  }
}
