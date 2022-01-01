import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/track.json'

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
  lista:string[]=["hola","que","tal", "estas"];

  mockTracksList:Array<TrackModel> = [
  ]
  food = [
    {name:'dumpl'},
    {name : 'pizza'}
  ];
  
  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default
    console.log(data);
    this.mockTracksList = data;
  }

}
