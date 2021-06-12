import { Injectable } from '@angular/core';
import { Player } from '../classes/player';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private http: HttpClient) {
  }

  returnWinner(playersState: Player[]): Observable<Player>{
    return this.http.post<Player>('http://localhost:5000/Game/PlayGame', playersState)
  }
}
