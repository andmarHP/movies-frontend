import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  peliculas;

  ngOnInit(): void {
    this.peliculas = [
      {
        titulo:"mago de oz",
        fechaLanzamiento:new Date(),
        precio:200
      },
      {
        titulo:"sangre por sangre",
        fechaLanzamiento:new Date(),
        precio:200
      },
      {
        titulo:"Spider man 1",
        fechaLanzamiento:new Date(),
        precio:200
      },
    ]
  }

}
