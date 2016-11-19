import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.Component';
import { AuthorComponent } from './authors.Component';
@Component({
    selector: 'my-app',
    template: 
        `<div id="app_body">
            <h1>My First Angular 2 App</h1>
            <courses></courses>
            <authors></authors>
        </div>`,
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { }