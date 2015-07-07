/**
 * Created by bhavya on 7/7/15.
 */
Meteor.publish('tweets',function(){
    return Tweets.find({},{sort:{date_created:-1}});
});
