import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() peliculas;

  ngOnInit(): void {

  }

  remover(index:number){
    this.peliculas.splice(index, 1);
  }

}
