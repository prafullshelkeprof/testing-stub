import {Component} from 'angular2/core';
interface Hero {
	id: number;
	name: string;
}
@Component({
    selector: 'my-app',
	templateUrl: 'views/tour-of-heroes.html'
})
export class AppComponent {
	public title: string = 'Tour of Heroes';

	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}	
}
