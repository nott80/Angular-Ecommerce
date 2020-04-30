import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: Send the message _after_ fetching the hero
    this. messageService.add(`HeroService: fetched hero id=${{id}}`);
    return of (HEROES.find(hero => hero.id === id));
  }

  private log(message: String) {
    this.messageService.add(`HeroService: ${message}`)
  }

}
