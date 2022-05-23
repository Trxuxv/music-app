import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Band } from './models/band.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _bands = new BehaviorSubject<Band[]>([]);

  constructor(private http: HttpClient) { }

  public getBands(): Observable<Band[]> {
    return this._getBand().pipe(
      tap(x => console.log("Data:", x))
    )
  }

  private _getBand() {
    return this.http.get<Band[]>("src/assets/data/bands")
      .pipe(
        take(1)
      );
  }
}