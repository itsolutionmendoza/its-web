import { Component, Input } from '@angular/core';
import { HostListener } from '@angular/core';
import { WhatsappService } from '../service/whatsapp.service'; 

@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.css']
})
export class CamarasComponent {

    constructor(private whatsappService: WhatsappService) {}

  abrirWhatsApp() {
    this.whatsappService.abrirWhatsApp();
  }

  @Input() items: { img: string, title?: string }[] = [];

  imagenesCamaras = [
  { image: '../../../assets/img/service-cctv1.webp', title: 'Cámara 1' },
  { image: '../../../assets/img/service-cctv2.webp', title: 'Cámara 2' },
  { image: '../../../assets/img/service-cctv4.webp', title: 'Cámara 3' }
];


}
