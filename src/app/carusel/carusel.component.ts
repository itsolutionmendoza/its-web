//import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
  animations: [

  ]
})
export class CaruselComponent implements OnInit{

  @Input() items: any[] = [];

 /* public slides: Array<any> = [

    { src: "../../../assets/img/gif-home.gif" },
    { src: "../../../assets/img/gif-home-3.gif" },
    { src: "../../../assets/img/gif-home-4.gif" },
    { src: "../../../assets/img/gif-home-5.gif" },
  ];*/



  currentSlide = 0;
  animationKey = 0;

  constructor() { }

  ngOnInit(): void {
    // Opcional: Cambiar de diapositiva automáticamente cada cierto tiempo
    setInterval(() => {
      this.nextSlide();
    }, 10000); // Cambia cada 10 segundos
  }

  selectSlide(index: number): void {
    this.currentSlide = index;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;
  }
  
}

