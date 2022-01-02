import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {
  lista:string[]=["hola","que","tal", "estas"];

  mockTracksList:Array<TrackModel> = [
  ]
  food = [
    {name:'dumpl'},
    {name : 'pizza'}
  ];
  
  listObservers$:Array<Subscription> = []
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.trackService.getAllTracks$()
    .subscribe(response => {
      console.log('CallService', response)
    })
    /*const observer1$ = this.trackService.dataTracksTrending$.subscribe(response => {
      this.tracksTrending = response;
      this.tracksRandom = response;
      console.log('Canciones trending', response);
    })
    const observer2$ = this.trackService.dataTracksRandom$.subscribe(response => {
      this.tracksRandom = [...this.tracksRandom, ...response];
      console.log('Canciones random..', response);
    })
    this.listObservers$ = [observer1$,observer2$ ]*/
  }
  ngOnDestroy(): void {
    /*this.listObservers$.forEach(u => u.unsubscribe())*/
  }

}
