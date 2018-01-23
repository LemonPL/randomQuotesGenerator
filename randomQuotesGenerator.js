
//RANDOM QUOTE MACHINE// jQuery ajax() Function
function randomQuote() {
$.ajax
({
  //API FROM FORISMATIC.COM
      url: "https://api.forismatic.com/api/1.0/?",
  //The data type expected of the server response.
      dataType: "jsonp",
  //Specifies data to be sent to the server.
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
  //A function to be run when the request succeeds.
      success: function( response ) {
        $("#runquote").html("<p id='runquote' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}
  
 
// Calling the function.       
$(function() {
  randomQuote();
});

$(".btn").click(function(){
  randomQuote();
}); 
