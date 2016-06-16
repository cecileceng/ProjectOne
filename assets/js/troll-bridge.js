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
            console.log(data);

            for (i = 0; i < 20; i++) {

                // if(data[i].retweeted == true) {data.splice(i,1);}
                // data[i].entities = false
                // data[i].extended_entities = false
            tweetText.push(data[i].text);
            
            //tweetText.toString();
            }
        var totalTweet = tweetText.join(". ");

        var handle_regex = /\@\w+[a-zA-Z]/gim;
        var hashtag_regex = /#\S*/gim;
        var colon_regex = /:\S*/gim;
        var url_www_regex = /https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}/gim;
        var url_other_regex = /\bhttp\:\/\/\w+\.\w+\/\w+/gim;
        var line_break_regex = /\r?\n|\r/gim;
        var RT_regex = /RT/gim;
        var cleanText = totalTweet.replace(handle_regex, '').replace(hashtag_regex, '').replace(url_www_regex, '').replace(url_other_regex, '').replace(colon_regex, '').replace(line_break_regex, '').replace(RT_regex, '');
        JSON.stringify(cleanText);
        console.log(cleanText);
        var cleaner_cleaner = /\W/gim;
        var cleanTextTwo = cleanText.replace(cleaner_cleaner, ' ');
        console.log(cleanTextTwo)
        var uri = cleanTextTwo;
        var res = encodeURI(uri);
//        var cleanText = "The Legend of Zelda Retweet event begins!  in-app gifts for s! h…. Technology catching up with our imaginations! Here's a staup with man-made shooting stars in its eyes  via .  Also, to clarify, not actually rich.. Inspiring words from Madeleine Albright in a commencement speech for the class of 2016 at Scripps     Looking forward to rich people problems  "
        var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + uri + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";    
        //$(".tweets").append(cleanText);
        //$(".tweets").append("<p>hello</p>");
        
        $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {
            console.log(response);
            //console.log(tweetText);
            });
        });
    });
});

$("#positive").html("<p>hello</p>");