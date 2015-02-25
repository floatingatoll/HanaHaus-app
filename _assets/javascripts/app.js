//= require vendor/jquery.min
//= require vendor/bootstrap.min

var Loader = function(imageurls) {
    var loadImage = function(imageurl) {
        var image = $('<img />').attr('src', imageurl).load();
    };

    var loadAll = function() {
        imageurls.forEach(function(image) {
            loadImage(image);
        });
    };

    return {
        loadAll: loadAll
    };
};

$(document).ready(function() {
    var currentFooter = $('#footer-socialmedia');
    $('#footer-socialmedia').show();

    $('#about-footer-nav').click(function() {
        currentFooter.hide(0)
        currentFooter = $('#footer-about');
        $('#footer-about').show();
    });

    $('#partners-footer-nav').click(function() {
        currentFooter.hide(0)
        currentFooter = $('#footer-partners');
        $('#footer-partners').show();
    });

    $('#social-footer-nav').click(function() {
        currentFooter.hide(0)
        currentFooter = $('#footer-socialmedia');
        $('#footer-socialmedia').show();
    });

    $('#find-footer-nav').click(function() {
        currentFooter.hide(0)
        currentFooter = $('#footer-findus');
        $('#footer-findus').show();
    });

    $('.socialmedia .image').css({
        'background-repeat': 'no-repeat',
        'background-position': 'right'
    });

    var loader = new Loader([
        /* Social: Hover images */
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Twitter_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Insta_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_FB_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Yelp_Color-01.png'
    ]);
    loader.loadAll();
    console.log('loaded');
});
