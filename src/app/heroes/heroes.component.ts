import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {

  constructor(private heroService: HeroService, private messageService: MessageService) {

   }

  ngOnInit(): void {
    this.getHeroes()
  }



  heroes: Hero[] = []

  selectedHero?: Hero


  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);

  }

  // If you implement this method in your component or directive class,
  // Angular calls it shortly after checking the input properties for that
  // component or directive for the first time.


}
