var queryURL = "https://api.havenondemand.com/1/api/sync/highlight/v1?text=text&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

$.ajax({
	url: queryURL,
	method: 'GET'
	})

	.done(function(response) {
		var results = entity.topic;
		console.log(results)
	});

});
		// var results = response.data;

		// for (var i = 0; i < results.length; i++) {
		// var gifDiv = $('<div class="item">')

		// var rating = results[i].rating;

		// var p = $('<p>').text("Rating: " + rating);

		// var personImage = $('<img>');
		// personImage.attr('src', results[i].images.fixed_height.url);
		// // alt way to code this: var personImage = $('<img>').attr('src', results[i].images.fixed_height.url);

		// gifDiv.append(p)
		// gifDiv.append(personImage)

		// $('#gifsAppearHere').prepend(gifDiv);
		// }