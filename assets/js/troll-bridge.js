//OAuth.initialize('JyMTUTko9vhzzB2JPK6qJ99Ve');

//provider can be 'facebook', 'twitter', 'github', or any supported
//provider that contain the fields 'firstname' and 'lastname' 
//or an equivalent (e.g. "FirstName" or "first-name")
//var provider = 'twitter';

$('#search').on('click', function() {
    OAuth.initialize('Csgqk4zZXi-S_NEKhLuYIwGlvCo')
    OAuth.popup('twitter', function(err, result){
        //console.log(err)
        result.get('/1.1/account/verify_credentials.json').done(function(data) {
       //     console.log(data)
        })
//        var twitterQuery = "/1.1/search/tweets.json?q=%23cecileforreal";
        var twitterQuery = "/1.1/statuses/user_timeline.json?screen_name=" + $('#username').val() + "&count10";
        result.get(twitterQuery).done(function(data) {
            //console.log(data);
            var tweetText = [];
            for (i = 0; i < data.length; i++) {
            //console.log(data[i].text);
            //var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + data[i].text + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";
            //var tweetText = [];
            tweetText.push(data[i].text);
            
            //tweetText.toString();
            }

        var totalTweet = tweetText.join();
        console.log(totalTweet);
        
        var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + totalTweet + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

        $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {
            console.log(response);
            //console.log(tweetText);
                
            });
        

        });

        var totalTweet = tweetText.join(" ");
        console.log(totalTweet);

        
        var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + totalTweet + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

        $.ajax({
            url: queryURL,
            method: 'GET'
            })


 //    .done(function(result) {
    //     console.log(result)
    //     // do some stuff with result
 //        var accessToken = result.oauth_token;
 //        console.log(result.oauth_token)
 //        var twitterQuery = "http://api.twitter.com/1.1/search/tweets.json?q=%23cecileforreal";
 //        $.ajax({
 //            beforeSend: function (xhr) {
 //                xhr.setRequestHeader("Authorization", "Bearer " + accessToken)
 //            },
 //            url: twitterQuery,
 //            method: 'GET',
 //            crossDomain: true
 //            })
 //            .done(function(response) {
 //                console.log(response)
 //            })
 //            .fail(function (err) {
 //                //handle error with err
 //                console.log(err)
 //            });
    // })
 //    .fail(function (err) {
 //      //handle error with err
 //      console.log(err)
 //    });
}) 

// var text = "hello you jerk"
// var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + text + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

// $.ajax({
//     url: queryURL,
//     method: 'GET'
//     })

//     .done(function(response) {
//         console.log(response)
        
//     });

/*

var tweetText = [];

//OAuth.initialize('JyMTUTko9vhzzB2JPK6qJ99Ve');

//provider can be 'facebook', 'twitter', 'github', or any supported
//provider that contain the fields 'firstname' and 'lastname' 
//or an equivalent (e.g. "FirstName" or "first-name")
//var provider = 'twitter';

$('#search').on('click', function() {
    OAuth.initialize('Csgqk4zZXi-S_NEKhLuYIwGlvCo')
    OAuth.popup('twitter', function(err, result){
        console.log(err)
        result.get('/1.1/account/verify_credentials.json').done(function(data) {
            console.log(data)
        })
//        var twitterQuery = "/1.1/search/tweets.json?q=%23cecileforreal";
        var twitterQuery = "/1.1/statuses/user_timeline.json?screen_name=" + $('#username').val() + "&count10";
        result.get(twitterQuery).done(function(data) {
            console.log(data)
=======
            .done(function(response) {
            console.log(response);
            //console.log(tweetText);
                
            });
        

        });
        

>>>>>>> 893b2dd3a6ff885139e7534d84ac2efdf02ddb77
    })

 //    .done(function(result) {
    //     console.log(result)
    //     // do some stuff with result
 //        var accessToken = result.oauth_token;
 //        console.log(result.oauth_token)
 //        var twitterQuery = "http://api.twitter.com/1.1/search/tweets.json?q=%23cecileforreal";
 //        $.ajax({
 //            beforeSend: function (xhr) {
 //                xhr.setRequestHeader("Authorization", "Bearer " + accessToken)
 //            },
 //            url: twitterQuery,
 //            method: 'GET',
 //            crossDomain: true
 //            })
 //            .done(function(response) {
 //                console.log(response)
 //            })
 //            .fail(function (err) {
 //                //handle error with err
 //                console.log(err)
 //            });
    // })
 //    .fail(function (err) {
 //      //handle error with err
 //      console.log(err)
 //    });
})   
        // var text = "hello that is wonderful!"
        // var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + text + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

<<<<<<< HEAD
var text = ["tweetText"];
var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + text + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";
=======
        // $.ajax({
        //     url: queryURL,
        //     method: 'GET'
        //     })
>>>>>>> 893b2dd3a6ff885139e7534d84ac2efdf02ddb77

        //     .done(function(response) {
        //     console.log(response);
        //     //console.log(tweetText);
                
        //     });
// var text = "hello you jerk"
// var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + text + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

// $.ajax({
//     url: queryURL,
//     method: 'GET'
//     })

//     .done(function(response) {
//         console.log(response)
        
<<<<<<< HEAD
    }); /*
=======
//     });
>>>>>>> 893b2dd3a6ff885139e7534d84ac2efdf02ddb77
