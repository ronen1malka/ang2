System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            class Tweet {
                constructor() {
                    this.text = "";
                    this.image = "";
                    this.aoutor = "";
                    this.tweeterHandler = "";
                    this.likeCount = 0;
                }
            }
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.js.map