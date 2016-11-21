System.register(["./tweet"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tweet_1;
    var TweetService;
    return {
        setters:[
            function (tweet_1_1) {
                tweet_1 = tweet_1_1;
            }],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    var tweets = new Array();
                    for (var i = 0; i <= 10; i++) {
                        var t = new tweet_1.Tweet();
                        t.aoutor = "aaaa " + i;
                        t.image = "http://lorempixel.com/100/100/people?" + i;
                        t.likeCount = i;
                        t.text = "text for " + i;
                        t.tweeterHandler = "@tweeterHandler " + i;
                        tweets.push(t);
                    }
                    return tweets;
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map