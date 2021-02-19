import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName$ = new EventEmitter<any>();

  constructor() { }
}
