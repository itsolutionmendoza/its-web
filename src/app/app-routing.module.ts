import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CamarasComponent } from './camaras/camaras.component';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { ControlAccesoComponent } from './control-acceso/control-acceso.component';
import { ServicePcComponent } from './service-pc/service-pc.component';
import { RedesComponent } from './redes/redes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'camaras', component: CamarasComponent },
  { path: 'alarmas', component: AlarmasComponent },
  { path: 'control-acceso', component: ControlAccesoComponent },
  { path: 'service-pc', component: ServicePcComponent },
  { path: 'redes', component: RedesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'ventas', component: VentasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // 👈 vuelve al top en cada navegación
    anchorScrolling: 'enabled'            // opcional: permite usar fragmentos (#id)
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
