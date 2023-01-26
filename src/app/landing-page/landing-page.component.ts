import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculasEnCines = [
        {
          titulo:"Thor",
          fechaLanzamiento:new Date(),
          precio:200,
          poster:'https://m.media-amazon.com/images/M/MV5BMTY3N2E5MTEtODhhMC00NzZlLWExZWEtOTA0NDQ3ZTc1N2U0XkEyXkFqcGdeQXVyMTI5ODk3NDU1._V1_QL75_UX280_CR0,0,280,414_.jpg'
        },
        {
          titulo:"Spiderman",
          fechaLanzamiento:new Date(),
          precio:200,
          poster:'https://www.gamecored.com/wp-content/uploads/2021/11/spider-man-no-way-home.jpg'
        },
        {
          titulo:"El camino",
          fechaLanzamiento:new Date(),
          precio:200,
          poster:'https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_QL75_UY148_CR9,0,100,148_.jpg'
        }
      ]
    });
  }

  peliculasEnCines;
  peliculasProximosEstrenos=[];
}
