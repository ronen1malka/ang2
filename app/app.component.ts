import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.Component';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses>',
    directives:[CoursesComponent]
})
export class AppComponent { }