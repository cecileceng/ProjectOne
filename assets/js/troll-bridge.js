// initialize
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
            var dates = [];
            var limit = 0;
            console.log(data);
            for (i = 0; i < data.length; i++) {
               if (data.length > 20) {
                   limit = 20
               }
               else {
                limit = data.length;
               }
                };
            for (i = 0; i < limit; i++) {
                // if(data[i].retweeted == true) {data.splice(i,1);}
                // data[i].entities = false
                // data[i].extended_entities = false
            tweetText.push(data[i].text);
            dates.push(data[i].created_at);
            //tweetText.toString();
            }
        console.log(dates);
        var totalTweet = tweetText.join(". ");
        // pull the description of the user's Twitter Account 
        var about = [];
        about.push(data[0].user.description);

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
        console.log(cleanTextTwo);
        var uri = cleanTextTwo;
        var res = encodeURI(uri);
//        var cleanText = "The Legend of Zelda Retweet event begins!  in-app gifts for s! h…. Technology catching up with our imaginations! Here's a staup with man-made shooting stars in its eyes  via .  Also, to clarify, not actually rich.. Inspiring words from Madeleine Albright in a commencement speech for the class of 2016 at Scripps     Looking forward to rich people problems  "
        var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + uri + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";    
        //$(".tweets").append(cleanText);
        //$(".tweets").append("<p>hello</p>");

        // Loop through dates and clean up format for HTML
        var cleanDates = [];
        console.log(tweetText);
        for (i = 0; i < dates.length; i++){
            var stringDate = JSON.stringify(dates[i]);
            cleanDates.push(stringDate.substring(0,20));
        }
        console.log(cleanDates);
        $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {
                // Calculate and display retrieved data
                // Convert Sentiment Value into a score out of 100
                var index = ((((response.aggregate.score) * (-1)) + 1) * 50);
                var userScore = index.toFixed(1);
                // Display score in different colors based on value
                if (about[0].length == 0) {
                    $("#description").html("<h4>User profile has no description. </h4>");
                }
                else {
                $("#description").html("<h4>" + about + "</h4>");
            }
                if (userScore < 50){
                    $("#rating").html("<div style='font-size: 40px; font-weight: bolder; float: left; color: #98FB98;'>" + userScore + "</div>");
                }
                else {
                    $("#rating").html("<div style='font-size: 40px; font-weight: bolder; float: left; color: #EE6363'>" + userScore + " </div>");
                }
                $('.hover1 > thead').html("<tr><th>#</th><th>Tweet</th></tr>");
                $('.hover2 > thead').html("<tr><th>#</th><th>Tweet</th></tr>");
                $('.hover3 > thead').html("<tr><th>#</th><th>Date</th><th>Tweet</th></tr>");
                $('.hover1 > tbody').html("");
                $('.hover2 > tbody').html("");
                $('.hover3 > tbody').html("");
                for (i = 0; i < response.positive.length; i++) {
                    var j = (i + 1);
                    $(".hover1 > tbody").append('<tr><td class="text-left" style="font-weight: bolder">' + j + '</td><td class="text-left" style="font-weight: bolder">' + response.positive[i].normalized_text + '</td></tr>');
                }
                for (i = 0; i < response.negative.length; i++) {
                    var j = (i + 1);
                    $(".hover2 > tbody").append('<tr><td class="text-left" style="font-weight: bolder">' + j + '</td><td class="text-left" style="font-weight: bolder">' + response.negative[i].normalized_text + '</td></tr>');
                }
                for (i = 0; i < tweetText.length; i++){
                    var j = (i + 1);
                    tweetstring = JSON.stringify(tweetText[i]);
                    datestring = cleanDates[i];
                    $(".hover3 > tbody").append('<tr><td class="text-left" style="font-weight: bolder">' + j + '</td><td class="text-left" style="font-weight: bolder">' + datestring + '</td><td class="text-left" style="font-weight: bolder">' + tweetstring + "</td><tr>");

                }
            });
        });
    });
});