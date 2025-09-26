import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  words: string[] = ['EMPRESA','NEGOCIO','HOGAR'];
  wordWrapperContent: string = '';
  addingWord: boolean = false;
  counter: number = 0;

  @Input() items: any[] = [];
  ngOnInit(): void {
    setInterval(() => {
      if (this.wordWrapperContent.length > 0 && !this.addingWord) {
        this.wordWrapperContent = this.wordWrapperContent.slice(0, -1);
      } else {
        this.addingWord = true;
      }

      if (this.addingWord) {
        if (this.wordWrapperContent.length < this.words[this.counter].length) {
          this.wordWrapperContent = this.words[this.counter].slice(0, this.wordWrapperContent.length + 1);
        } else {
          if (this.counter < this.words.length - 1) {
            this.counter++;
          } else {
            this.counter = 0;
          }
          this.addingWord = false;
        }
      }
    }, 250);

        this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.logosMarcas.length;
    }, 3000); // Cambia cada 1 segundos
  }
  
    slides = [
    { image: "../../../assets/img/gif-home.gif", title: 'Slide 1' },
    { image: "../../../assets/img/gif-home-3.gif", title: 'Slide 2' },
    { image: "../../../assets/img/gif-home-5.gif", title: 'Slide 4' },
    { image: "../../../assets/img/gif-home-6.gif", title: 'Slide 5' },
    { image: "../../../assets/img/gif-home-7.gif", title: 'Slide 5' },
  ];

  logosMarcas: Array<any> = [
    {img: '../../assets/img/amd-logo.webp'},
    {img: '../../assets/img/intel-logo.webp'},
    {img: '../../assets/img/kingston-logo.webp'},
    {img: '../../assets/img/asrock-logo.webp'},
    {img: '../../assets/img/cougar-logo.webp'},
    {img: '../../assets/img/dahua-logo.webp'},
    {img: '../../assets/img/ezviz-logo.webp'},
    {img: '../../assets/img/hikvision-Logo.webp'},
    {img: '../../assets/img/imou-logo.webp'},
    {img: '../../assets/img/marshall-logo.webp'},
    {img: '../../assets/img/dahua-logo.webp'},
    {img: '../../assets/img/ezviz-logo.webp'},
    {img: '../../assets/img/hikvision-Logo.webp'},
    {img: '../../assets/img/imou-logo.webp'},
    {img: '../../assets/img/marshall-logo.webp'},
    {img: '../../assets/img/Furukawa-logo.webp'},
    {img: '../../assets/img/cisco-logo.webp'},
    {img: '../../assets/img/ubiquiti-logo.webp'},
    {img: '../../assets/img/tp-link-logo.webp'},
    {img: '../../assets/img/mikro-tik-logo.webp'}
  ];

  currentIndex = 0;
  intervalId: any;


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
