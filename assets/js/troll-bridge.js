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
        var twitterQuery = "/1.1/search/tweets.json?q=%23cecileforreal";
        result.get(twitterQuery).done(function(data) {
            console.log(data)
        })

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



var text = "Don King, and so many other African Americans who know me well and endorsed me, would not have done so if they thought I was a racist!"
var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + text + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

$.ajax({
    url: queryURL,
    method: 'GET'
    })

    .done(function(response) {
        console.log(response)
        
    });