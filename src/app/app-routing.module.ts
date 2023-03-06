import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: "heroes", component: HeroesComponent}
]


// Importa os dados necessarios para criar as configuracoes das
// rotas especificadas

// exporta o modulo de Router

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})



export class AppRoutingModule {}
