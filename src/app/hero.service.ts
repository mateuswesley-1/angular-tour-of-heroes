import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Hero[] {
    this.messageService.add("Heroes: fetched")
    console.log(this.messageService)
    return HEROES
  }
}
