import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback:EventEmitter<any> = new EventEmitter<any>();
  //Dato que emite eventos; Nos podemos subscribir ó podemos emitir
  constructor() { }
}
