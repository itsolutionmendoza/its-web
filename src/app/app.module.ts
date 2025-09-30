import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CaruselComponent } from './carusel/carusel.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CamarasComponent } from './camaras/camaras.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { ControlAccesoComponent } from './control-acceso/control-acceso.component';
import { ServicePcComponent } from './service-pc/service-pc.component';
import { RedesComponent } from './redes/redes.component';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CaruselComponent,
    ContactoComponent,
    CamarasComponent,
    FooterComponent,
    WhatsappComponent,
    HomeComponent,
    AlarmasComponent,
    ControlAccesoComponent,
    ServicePcComponent,
    RedesComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
