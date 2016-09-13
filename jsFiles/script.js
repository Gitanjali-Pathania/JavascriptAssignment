var quote = '', author = '',data=[];
$(document).ready(function () {
    data=person.priorities;
    generate();
    $('#new-quote').on('click', generate);
    $('#tweet').on('click', function () {
       
        window.open('https://twitter.com/intent/tweet?text='+ quote +' "'+author+'"');
       
    });
    $('#tumblr').on('click', function () {
       
            window.open('https://www.tumblr.com');
       
    });
});
function generate() {
            console.log(data)
            var randomNumber=rand();
            var r= data[randomNumber];
            console.log(data[randomNumber]);
            quote = r.quote;
            author = r.by;
            console.log(quote);
            console.log(author);
            $('.quote').animate(
                { 
                    opacity: 0.1
                }, 600, function () {
                $(this).animate({ opacity: 1 }, 600);
                $('#text').text(quote);
            });
            $('.author').animate(
                { 
                    opacity: 0.1
                }, 600, function () {
                $(this).animate({ opacity: 1 }, 600);
                $('#authorId').html(author);
            });
            $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ quote +' "'+ author+'"');
            $('#tumblr').attr('href', 'https://www.tumblr.com');
}
function rand(){
    return Math.floor(Math.random()*4+1);
}


