var text = "Don King, and so many other African Americans who know me well and endorsed me, would not have done so if they thought I was a racist!"
var queryURL = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text=" + text + "&highlight_expression=links&apikey=e91f7825-eb95-4ef2-be5e-09485475e3d8";

$.ajax({
    url: queryURL,
    method: 'GET'
    })

    .done(function(response) {
        console.log(response)
        
    });