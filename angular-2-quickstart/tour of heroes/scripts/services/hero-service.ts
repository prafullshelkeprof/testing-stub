import {Injectable} from 'angular2/core';
import {HEROES} from '../data/mock-heroes';

@Injectable()
export class HeroService {
	getHeroes() {
		return Promise.resolve(HEROES);
	}
}