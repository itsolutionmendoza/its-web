import { Component, Input } from '@angular/core';
import { WhatsappService } from '../service/whatsapp.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent {

      constructor(private whatsappService: WhatsappService) {}
  
    abrirWhatsApp() {
      this.whatsappService.abrirWhatsApp();
    }

      @Input() items: { img: string, title?: string }[] = [];
      
    
      imagenesRedes = [
      { image: '../../../assets/img/redes-1.webp', title: 'Control acceso 1' },
      { image: '../../../assets/img/redes-2.webp', title: 'Control acceso 2' },
      { image: '../../../assets/img/redes-3.webp', title: 'Control acceso 3' }
    ];
}
