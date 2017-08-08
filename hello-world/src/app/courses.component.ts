import { Component } from '@angular/core';
import { CoursesService } from "./courses.service";


@Component({
	selector: 'authorTag',
	template: `
	<h2> {{title}} </h2>
	<ul>
	<li *ngFor="let author of authors">
	{{author}}
	</li>
	
	</ul>
	`
})
export class CoursesComponent{
	title="list of Authors";
	author;

	constructor(service: CoursesService){
		this.author = service.getAuthors();

	}
}