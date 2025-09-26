import { Component, Input } from '@angular/core';
import { WhatsappService } from '../service/whatsapp.service';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.css']
})
export class AlarmasComponent {

  @Input() items: { img: string, title?: string }[] = [];
  
      constructor(private whatsappService: WhatsappService) {}
  
    abrirWhatsApp() {
      this.whatsappService.abrirWhatsApp();
    }

  imagenesAlarmas = [
  { image: '../../../assets/img/alarma-1.webp', title: 'Alarma 1' },
  { image: '../../../assets/img/alarma-2.webp', title: 'Alarma 2' },
  { image: '../../../assets/img/alarma-3.webp', title: 'Alarma 3' }
];
}
