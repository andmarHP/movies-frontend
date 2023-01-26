import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maximoRating = 5;
  @Input() ratingSeleccionado = 0;

  @Output() rated:EventEmitter<number> = new EventEmitter<number>();// para actualizar el valor del rating

  maximoRatingArreglo = [];

  votado:boolean = false;
  ratingAnterior = 0;

  constructor(){

  }

  ngOnInit():void{
    this.maximoRatingArreglo = Array(this.maximoRating).fill(0); //[0,0,0,0,0]
  }

  manejarMouseEnter(index:number):void{
    this.ratingSeleccionado = index + 1 ;
  }

  manejarMouseLeave():void{
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else{
      this.ratingSeleccionado = 0;
    }
  }

  //darle el valor a las estrellas
  rate(index: number):void{
    this.ratingSeleccionado = index + 1; //para que no empiece en 0
    this.votado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    // !emitir el valor del rating, para que se actualice
    this.rated.emit(this.ratingSeleccionado);
  }

}
