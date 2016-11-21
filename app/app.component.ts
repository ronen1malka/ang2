import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.Component';
import { AuthorComponent } from './authors.Component';
import { FavoriteComponent } from './favorite.component'
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';
import { TweetComponent } from './tweet.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [TweetComponent, CoursesComponent, AuthorComponent,
        FavoriteComponent, LikeComponent, VoterComponent]
})
export class AppComponent {
    onFavoriteChange($event) {
        console.log($event)
    }
    onLikeChange($event) {
        console.log($event)
    }

    onVoterChange($event) {
        console.log($event)
    }
}