import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu: {defaultOptions: Array<any>, accessLink: Array<any>} = {defaultOptions:[], accessLink:[]}
  customOptions: Array<any> = []
  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/']
      },
      {
        name: 'Tu biblioteca',
        icon:'uil uil-chart',
        router:['/','favorites']
      },
      {
        name: 'Track',
        icon:'uil uil-headphones-alt',
        router:['/','tracks']
      }
    ]
    this.customOptions = [
      {
        name: 'Mi lista #1',
        router:['/']
      },
      {
        name: 'Mi lista #2',
        router:['/']
      },
      {
        name: 'Mi lista #3',
        router:['/']
      },
      {
        name: 'Mi lista #4',
        router:['/']
      }
    ]
  }

}
