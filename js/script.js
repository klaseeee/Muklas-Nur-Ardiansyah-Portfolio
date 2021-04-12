$('.page').on('click', function(e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
    scrollTop: elemenTujuan.offset().top - 50
    }, 1000,'swing');

    e.preventDefault();
});

// Parallax
$(window).scroll(function() {
    var wScroll =$(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform':'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform':'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform':'translate(0px, '+ wScroll/1.5 +'%)'
    });

    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 350) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('tampil');
            }, 300 * (i+1));
        });
    }

    // About
    if (wScroll > $('.pKiri, pKanan').offset().top - 400) {
        $('.pKiri').addClass('normal');
        $('.pKanan').addClass('normal');
    };
});












