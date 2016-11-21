import { Component } from 'angular2/core';
import {TweetService} from './tweet.service'
import {Tweet} from "./tweet"
import { LikeComponent } from './like.component';

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    providers: [TweetService],
    directives:[LikeComponent]
})

export class TweetComponent {
    tweets;

    constructor(tweetService:TweetService) { 
    this.tweets = tweetService.getTweets();
   
    }
}