import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { observable, Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import * as dataRaw from '../../../data/track.json';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  /*dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<any> = of([])*/
  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) {
    /*const {data}:any = (dataRaw as any).default
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id:9,
        name:'Leve',
        album:'Cartel',
        url:'https/',
        cover:'https://i.pinimg.com/originals/1c/e4/c8/1ce4c8a443d1782e1129c1e4c9215645.jpg'

      }
      //observer.next([trackExample])
      setTimeout(() => {
        observer.next([trackExample])
      }, 3500);
    })*/
   }
   private skipById(listTracks:TrackModel[], id:number): Promise<TrackModel[]> {
     return new Promise((resolve, reject) => {
       const listTmp = listTracks.filter(a => a._id !== id)
       resolve(listTmp)
     })
   }
   getAllTracks$(): Observable<any> {
     return this.httpClient.get(`${this.URL}/tracks`)
     .pipe(
       map(({data}: any) => {
         return data
       })
     )
   }

   getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      mergeMap(({data}: any) => this.skipById(data,2)),
      tap(data => console.log(data))
      /*map((dataRevertida) => {
        return dataRevertida.filter((track:TrackModel)=> track._id !== 1)
      })*/
    )
  }
}
