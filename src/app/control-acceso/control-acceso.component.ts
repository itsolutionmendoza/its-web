import { Component, Input } from '@angular/core';
import { WhatsappService } from '../service/whatsapp.service';

@Component({
  selector: 'app-control-acceso',
  templateUrl: './control-acceso.component.html',
  styleUrls: ['./control-acceso.component.css']
})
export class ControlAccesoComponent {

      constructor(private whatsappService: WhatsappService) {}
  
    abrirWhatsApp() {
      this.whatsappService.abrirWhatsApp();
    }

    @Input() items: { img: string, title?: string }[] = [];
    
  
    imagenesControl = [
    { image: '../../../assets/img/control-1.webp', title: 'Control acceso 1' },
    { image: '../../../assets/img/control-2.webp', title: 'Control acceso 2' },
    { image: '../../../assets/img/control-3.webp', title: 'Control acceso 3' }
  ];
}
