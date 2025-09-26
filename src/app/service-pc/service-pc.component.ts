import { Component, Input } from '@angular/core';
import { WhatsappService } from '../service/whatsapp.service';

@Component({
  selector: 'app-service-pc',
  templateUrl: './service-pc.component.html',
  styleUrls: ['./service-pc.component.css']
})
export class ServicePcComponent {

      constructor(private whatsappService: WhatsappService) {}
  
    abrirWhatsApp() {
      this.whatsappService.abrirWhatsApp();
    }

  @Input() items: { img: string, title?: string }[] = [];
      
  imagenesService = [
  { image: '../../../assets/img/servicios2.webp', title: 'service pc' },
];
}
