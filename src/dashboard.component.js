import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(heroService: HeroService) {
      console.log(heroService);
      this.heroService = heroService;
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
