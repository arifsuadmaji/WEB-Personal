// Event pada saat link di klik
$('.page-scroll').on('click', function(e){
    
    // Ambil isi href
    var tujuan = $(this).attr('href');
    // Tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    
    // pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-50
    }, 900, 'easeInOutExpo');

    e.preventDefault();   
})


// Paralax
// About
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
});


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron
    // jquery tolong carikan img didalam jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, '+ wScroll/1.2 +'%)'
    });

    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 450) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }
});