import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../services/hero-service';

@Component({
    selector: 'my-app',
	//templateUrl: 'views/tour-of-heroes.html',
	template: `<h1>{{title}}</h1>
				<h2>My Heroes</h2>
				<ul class="heroes">
				    <li *ngFor="#hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
				        <span class="badge">{{hero.id}}</span> {{hero.name}}
				    </li>
				</ul>
				<my-hero-detail [hero]="selectedHero">				
				</my-hero-detail>`,
	directives: [HeroDetailComponent],
	providers: [HeroService],
	styles: [`.selected {
    background-color: #CFD8DC !important;
    color: white;
}

.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
}

.heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
}

.heroes li.selected:hover {
    color: white;
}

.heroes li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
}

.heroes .text {
    position: relative;
    top: -3px;
}

.heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
}
`]
	//styleUrls: ['../../css/heroes.css']
})
export class AppComponent implements OnInit {
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