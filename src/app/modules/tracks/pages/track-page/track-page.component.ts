import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
  mockTracksList = [
    {
      name: 'BEBE (Oficial)'
    },
    {
      name: 'FIEL (Oficial)'
    },
    {
      name: 'PEPAS (Oficial)'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
