//  api key 478b36f695fa419a86505c7fc1ed9bff
var search = "";
var fq= "";
var beginDate = "";
var endDate = "";
var sort = "";

$(document).ready(function(){


function apiCall(){
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "478b36f695fa419a86505c7fc1ed9bff",
  'q': search ,
  // 'fq': fq,
  // 'begin_date': beginDate,
  // 'end-date': endDate,
  'sort': sort
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);









}).fail(function(err) {
  throw err;
});

};


$("#add-movie").on("click", function(event) {
	alert("lol");
        event.preventDefault();
        // This line grabs the input from the textbox
        search = $("#search").val().trim();
        sort = $("#search2").val().trim();
        console.log(search);




apiCall();
});

});