import { Component } from 'angular2/core'
import { CoursesService } from './course.service'
import { AutoGrowDirective } from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="#course of courses">
            {{course}}
        </li>
    </ul>
    `,
    providers: [CoursesService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "The title of this course";
    courses;

    constructor(courseService: CoursesService) {
        this.courses = courseService.getCourses();
    }
}