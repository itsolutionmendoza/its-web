import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  abrirWhatsApp(): void {
    const phone = '5492615958789'; // tu número con código de país
    const message = 'Hola, quiero asesoría gratuita.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}