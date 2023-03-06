import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // Permite que esse atributo venha do componente pai (componente onde usaremos a tag app-hero-detail)
  @Input() hero?: Hero
}
