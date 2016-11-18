import {Component} from 'angular2/core'

@Component({
    selector:'courses',
    template:`<h2>{{title}}</h2>
    <ul>
        <li *ngFor="#course of courses">
            {{course}}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title="The title of this course";
    courses = ["course1","course2","course3",]
}