/**
 * Created by bhavya on 7/7/15.
 */
Template.tweetsList.helpers({
    tweets: function() {
        return Tweets.find({});
    }
});