import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

@ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsSvc: GifsService) { }

  ngOnInit(): void {
  }
  buscar(termino:string){

    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length ===0){

    }

this.gifsSvc.buscarGifs(valor);
this.txtBuscar.nativeElement.value="";
  }
}
