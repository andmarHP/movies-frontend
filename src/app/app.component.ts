import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';

  ngOnInit():void{
    setTimeout(() => {
      this.peliculasEnCines = [
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
    }, 2000);
  }

  peliculasEnCines

  peliculasProximosEstrenos = [
    {
      titulo:"thor",
      fechaLanzamiento:new Date(),
      precio:433
    },
    {
      titulo:"el camino",
      fechaLanzamiento:new Date(),
      precio:2030
    },
    {
      titulo:"hulk",
      fechaLanzamiento:new Date(),
      precio:452
    },
  ];


}
