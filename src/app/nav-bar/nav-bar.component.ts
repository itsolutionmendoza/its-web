import { HostBinding, HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  navActive = false;


  constructor() {}

  ngOnInit(): void {
  
  }



  toggleNav() {
    this.navActive = !this.navActive;
  }



}
