import {Component} from 'angular2/core';

export class Hero{
	id: number;
	name: string;
}


@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} Details!</h2>
		<div><label>id: </label> {{hero.id}}</div>
		<div>
			<label>name: </label>
			<input [(ngModel)]="hero.name" placeholder="name">
		</div>
	`
})



export class AppComponent {
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
	public heroes = HEROES;
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "John Doe"},
	{ "id": 12, "name": "John Doe"},
	{ "id": 13, "name": "John Doe"},
	{ "id": 14, "name": "John Doe"},
	{ "id": 15, "name": "John Doe"},
	{ "id": 16, "name": "John Doe"},
	{ "id": 17, "name": "John Doe"},
	{ "id": 18, "name": "John Doe"},
	{ "id": 19, "name": "John Doe"},
	{ "id": 20, "name": "John Doe"},
];