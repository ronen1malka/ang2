import {Tweet} from "./tweet"
export class TweetService {

    getTweets(): Tweet[] {
        let tweets : Tweet[] = new Array<Tweet>();
        for(let i =0;i<=10;i++){
            let t:Tweet = new Tweet();
            t.aoutor="aaaa " + i;
            t.image="http://lorempixel.com/100/100/people?"  + i;
            t.likeCount = i;
            t.text="text for " + i;
            t.tweeterHandler ="@tweeterHandler " + i;
            tweets.push(t);
        }

        return tweets;
    }

}