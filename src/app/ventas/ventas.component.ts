import { Component, Input } from '@angular/core';
import { WhatsappService } from '../service/whatsapp.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

      constructor(private whatsappService: WhatsappService) {}
  
    abrirWhatsApp() {
      this.whatsappService.abrirWhatsApp();
    }

      @Input() items: { img: string, title?: string }[] = [];
      
    
      imagenesComputadoras = [
      { image: '../../../assets/img/equipo-1.webp', title: 'Control acceso 1' },
      { image: '../../../assets/img/equipo-2.webp', title: 'Control acceso 2' },
      { image: '../../../assets/img/equipo-3.webp', title: 'Control acceso 3' },
      { image: '../../../assets/img/equipo-4.webp', title: 'Control acceso 3' }
    ];
}
