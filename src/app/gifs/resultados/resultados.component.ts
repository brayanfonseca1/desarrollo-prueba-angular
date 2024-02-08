import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  get resultados(){

    return this.gifsSvc.resultados;
  }

  constructor(private gifsSvc:GifsService) { }


  ngOnInit(): void {
  }

}
