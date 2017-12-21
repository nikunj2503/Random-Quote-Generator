$( document ).ready(function() {
    
    var quote;
    var author;

    function getQuote(){
        $.ajax({  
            url: "https://talaikis.com/api/quotes/random/ ",
            method:'GET',
            dataType: "json",
            success: function(response){
                // console.log(response);
                quote = JSON.stringify(response.quote);
                author = JSON.stringify(response.author);
                var html = '';
                html += "<p><i class='fa fa-quote-left' aria-hidden='true'></i> "+response.quote+" <i class='fa fa-quote-right' aria-hidden='true'></i></p>";
                html += "<h3>~ "+response.author+"</h3>";
                $('.quotes').html(html);

                tweet();
            }
        });
    }

    getQuote();

    $('.newQuote').on('click',function(){
        getQuote();
    });

    function tweet() {
        var twitterButton = $('.twitter-share-button');
        var twitterUrl = "https://twitter.com/intent/tweet?text="+quote+" ~ "+author;
        console.log(twitterUrl);
        twitterButton.on('click',function(){
            twitterButton.attr("href", twitterUrl);
        });
    }

    // function changeBackgroundColor(){
    //     var colors = ["cornflowerblue","blurywood","choclate","crimson","darkblue","darkolivegreen","darkorchid","darkslateblue","darkturquoise","dimgrey","firebrick"];
    //     var color = Math.floor(Math.random()*10); 
    //     console.log(color);
    //     $('body').css('background',colors[color]);
    //     $('.newQuote').css('background',colors[color]);
    // }

    // setInterval(changeBackgroundColor,3000);
    
    

    // $.getJSON("https://talaikis.com/api/quotes/random/ ", function(val){
    //     console.log(val);
    // });
});