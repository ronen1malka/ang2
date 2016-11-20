import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.Component';
import { AuthorComponent } from './authors.Component';
import { FavoriteComponent } from './favorite.component'
import { LikeComponent } from './like.component'
@Component({
    selector: 'my-app',
    template: 
        `<div id="app_body">
            <h1>The App!</h1>
            <courses></courses>
            <authors></authors>
            <favorite (change)="onFavoriteChange($event)"></favorite>
            <like (change)="onLikeChange($event)"></like>         
        </div>`,
    directives: [CoursesComponent, AuthorComponent,FavoriteComponent,LikeComponent]
})
export class AppComponent { 

    onFavoriteChange($event){
        console.log($event)
    }

    onLikeChange($event){
        console.log($event)
    }
}