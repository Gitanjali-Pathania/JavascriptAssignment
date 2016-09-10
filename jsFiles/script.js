var colorObj = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];
var quote = '', author = '';
// function openURL(url) {
//     window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
// }
function generate() {
    $.ajax({
        headers: {
            'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function (response) {
            console.log(response)
            var r = JSON.parse(response);
            console.log(r)
            quote = r.quote;
            author = r.author;
            
                $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ quote +' "'+ author+'"');
                $('#tumblr').attr('href', 'https://www.tumblr.com');
           
            $('.quote').animate({ opacity: 0 }, 500, function () {
                $(this).animate({ opacity: 1 }, 500);
                $('#text').text(r.quote);
            });
            $('.author').animate({ opacity: 0 }, 500, function () {
                $(this).animate({ opacity: 1 }, 500);
                $('#authorId').html(r.author);
            });
            var color = Math.floor(Math.random() * colorObj.length);
            $('html body').animate({
                backgroundColor: colorObj[color],
                color: colorObj[color]
            }, 1000);
            $('.button').animate({ backgroundColor: colorObj[color] }, 1000);
        }
    });
}
$(document).ready(function () {
    generate();
    $('#new-quote').on('click', generate);
    $('#tweet').on('click', function () {
       
        window.open('https://twitter.com/intent/tweet?text='+ quote +' "'+author+'"');
       
    });
    $('#tumblr').on('click', function () {
       
            window.open('https://www.tumblr.com');
       
    });
});

