import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Juninho da Van' },
      { id: 13, name: 'Serginho da pereira Nunes Professor' },
      { id: 14, name: 'Rogerinho do inga' },
      { id: 15, name: 'Maurilio Da kombi' },
      { id: 16, name: 'Craque Daniel' },
      { id: 17, name: 'Paulo Vinicius Emanuel' },
      { id: 18, name: 'Luno' },
      { id: 19, name: 'Pandora' },
      { id: 20, name: 'Amanda' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
