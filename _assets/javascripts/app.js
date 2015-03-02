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

function initFooter() {
    var currentFooter = $('#footer-menu');
    currentFooter.show();

    var menuNav = $('#menu-footer-nav');
    var aboutNav = $('#about-footer-nav');
    var partnersNav = $('#partners-footer-nav');
    var socialNav = $('#social-footer-nav');
    var findNav = $('#find-footer-nav');

    var removeActiveClasses = function(currentNav) {
        var menus = [menuNav, aboutNav, partnersNav, socialNav, findNav];
        var current = menus.indexOf(currentNav);
        if(current !== -1) {
            array.splice(current, 1);
        }
        menus.forEach(function(menu) {
            menu.removeClass('activelink');
        });
    };

    menuNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide(0)
        currentFooter = $('#footer-menu');
        $('#footer-menu').show();
    });

    aboutNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide(0)
        currentFooter = $('#footer-about');
        $('#footer-about').show();
    });

    partnersNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide(0)
        currentFooter = $('#footer-partners');
        $('#footer-partners').show();
    });

    socialNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide(0)
        currentFooter = $('#footer-socialmedia');
        $('#footer-socialmedia').show();
    });

    findNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide(0)
        currentFooter = $('#footer-findus');
        $('#footer-findus').show();
    });

    $('.socialmedia .image').css({
        'background-repeat': 'no-repeat',
        'background-position': 'right'
    });
}

function initDownScroll() {
    $('#arrowdown').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });
}

function initFormSubmission() {
    var url = 'https://getsimpleform.com/messages?form_api_token=b77fbdb1558ac9e48dde0bffba09f9c9';
    var button =  $('#contactformbutton');
    var messagesuccess = $('#messagesuccess');
    // var messageerror = $('#messageerror');

    button.click(function(event) {
        console.log('click');
        event.preventDefault();
        $.post(url, $('#contactform').serialize(), function(data) {
            button.hide(0);
            messagesuccess.show();
        }, 'json');
    });
}

$(document).ready(function() {
    initFooter();
    initDownScroll();
    initFormSubmission();


    var loader = new Loader([
        /* Social: Hover images */
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Twitter_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Insta_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_FB_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Yelp_Color-01.png'
    ]);
    loader.loadAll();
});
