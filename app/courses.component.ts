import {Component} from 'angular2/core'
import {CoursesService} from './course.service'

@Component({
    selector:'courses',
    template:`<h2>{{title}}</h2>
    <ul>
        <li *ngFor="#course of courses">
            {{course}}
        </li>
    </ul>
    `,
    providers: [CoursesService]
})

export class CoursesComponent {
    title="The title of this course";
    courses;

    constructor(courseService:CoursesService){
        this.courses= courseService.getCourses();
    }
}