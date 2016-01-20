import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../services/hero-service';

@Component({
    selector: 'my-app',
	templateUrl: 'views/tour-of-heroes.html',
	directives: [HeroDetailComponent],
	providers: [HeroService],
	styleUrls: ['../../css/heroes.css']
})
export class AppComponent implements OnInit{
	public title: string = 'Tour of Heroes';
	public heroes: Hero[];
	public selectedHero: Hero;
	constructor(private _heroService: HeroService) { };
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	ngOnInit() {
		this.getHeroes();
	}
}