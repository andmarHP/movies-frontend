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
    }, 3000);
  }

  peliculasEnCines;

  peliculasProximosEstrenos=[];


}
