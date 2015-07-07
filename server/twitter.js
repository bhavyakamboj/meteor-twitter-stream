/**
 * Created by bhavya on 7/7/15.
 */
Meteor.startup(function () {
    var Twit = Meteor.npmRequire('twit');
    var conf = JSON.parse(Assets.getText('twitter.json'));
    var T = new Twit({
        consumer_key: conf.consumer.key,
        consumer_secret: conf.consumer.secret,
        access_token: conf.access_token.key,
        access_token_secret:  conf.access_token.secret
    })
    //
    // filter the public stream by english tweets containing `#apple`
    //
    var stream = T.stream('statuses/filter', {track: conf.keyword});
    stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
        var userName = tweet.user.name;
        var userScreenName = tweet.user.screen_name;
        var userTweet = tweet.text;
        var tweetDate = tweet.created_at;
        var profileImg = tweet.user.profile_image_url;
       // console.log(userScreenName + ' (' + userName + ') ' + ' said ' + userTweet + ' at ' + tweetDate);
       // console.log('=======================================');
        Tweets.insert({user: userName, userscreen: userScreenName, tweet: userTweet, picture: profileImg, date: tweetDate }, function(error){
            if(error)
            console.log(error);
        })
    }));
});
