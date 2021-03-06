//= require vendor/jquery.min
//= require vendor/bootstrap.min

var mobileInterval;
var currentScrollPosition = 0;
var learnDivSwapped = false;

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

function initLoadImages() {
    var loader = new Loader([
        /* Social: Hover images */
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Twitter_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Insta_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_FB_Color-01.png',
        'https://raw.githubusercontent.com/HanaHaus/HanaHaus-ux/master/01_Website/Assets/01_Home%20Screen/Social_Yelp_Color-01.png'
    ]);
    loader.loadAll();
}

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
        currentFooter.hide()
        currentFooter = $('#footer-menu');
        $('#footer-menu').show();
    });

    aboutNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide()
        currentFooter = $('#footer-about');
        $('#footer-about').show();
    });

    partnersNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide()
        currentFooter = $('#footer-partners');
        $('#footer-partners').show();
    });

    socialNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide()
        currentFooter = $('#footer-socialmedia');
        $('#footer-socialmedia').show();
    });

    findNav.click(function() {
        removeActiveClasses();
        $(this).addClass('activelink');
        currentFooter.hide()
        currentFooter = $('#footer-findus');
        $('#footer-findus').show();
    });

    $('.socialmedia .image').css({
        'background-repeat': 'no-repeat',
        'background-position': 'right'
    });
}

function initMobileMenu() {
    $('#menu-footer-mobile-nav').click(function() {
        $('#menu-modal').fadeOut(function() {
            $('#footer-mobile-menu').fadeIn();
        });
    });

    $('#about-footer-mobile-nav').click(function() {
        $('#menu-modal').fadeOut(function() {
            $('#footer-mobile-about').fadeIn();
        });
    });

    $('#findus-footer-mobile-nav').click(function() {
        $('#menu-modal').fadeOut(function() {
            $('#footer-mobile-findus').fadeIn();
        });
    });

    $('#partners-footer-mobile-nav').click(function() {
        $('#menu-modal').fadeOut(function() {
            $('#footer-mobile-partners').fadeIn();
        });
    });

    $('#socialmedia-footer-mobile-nav').click(function() {
        $('#menu-modal').fadeOut(function() {
            $('#footer-mobile-socialmedia').fadeIn();
        });
    });
}

function initDownScroll() {
    $('#arrowdown').click(function(event) {
        event.preventDefault();
        if ($(window).width() < 500) {
            $('html, body').animate({
                scrollTop: $("#work").offset().top - ($('#home-hamburger-2').height() - 5)
            }, 1000);
        }
        else {
            $('html, body').animate({
                scrollTop: $("#work").offset().top
            }, 1000);
        }
    });
}

// for mobile site
function initChangeHomeMenu() {
    mobileInterval = setInterval(function() {
        if (($('#menuThing').is(":visible")) && $(window).scrollTop() >= $('.intro-text').offset().top - 100) {
            $('#menuThing').css('display', 'none');
        }
        if ((!$('#menuThing').is(":visible")) && $(window).scrollTop() < $('.intro-text').offset().top - 100) {
            $('#menuThing').fadeIn(200);
        }
        if ((!$('#menuThing2').is(":visible")) && $(window).scrollTop() >= $("#work").offset().top-$('#home-hamburger-2').height()) {
            $('#home-hamburger-2-bg').fadeIn(200);
            $('#menuThing2').fadeIn(200);
            $('#hhLogo').fadeIn(200);
        }

        if (($('#menuThing2').is(":visible")) && $(window).scrollTop() < $("#work").offset().top-$('#home-hamburger-2').height()) {
            $('#home-hamburger-2-bg').fadeOut(200);
            $('#menuThing2').fadeOut(200);
            $('#hhLogo').fadeOut(200);
        }

    }, 100);
}

function initModalClick() {
    $('.click-to-show-menu').click(function() {
        currentScrollPosition = $(window.scrollTop);
        $('#main-content').fadeOut(200, function() {
            $('#menu-modal').fadeIn(200, function() {
                console.log('kek');
            });
        });
    });
}

function swapLearnDiv() {
    $('.swap').each(function(i, el) {
        $(el).insertBefore($(el).prev());
    });
}

function initBackButton() {
    $('#back-button').click(function() {
        $('#menu-modal').fadeOut(200, function() {
            $('#main-content').fadeIn(200, function() {
                // FIXME: find a way to return to previous scroll position
                // prior to opening the modal
                $('html, body').animate({
                    scrollTop: currentScrollPosition
                }, 0);
            });
        });
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
            button.hide();
            messagesuccess.show();
        }, 'json');
    });
}

// DOCUMENT
$(document).ready(function() {
    initFooter();
    initDownScroll();
    initFormSubmission();
    initLoadImages();
    initModalClick();
    initBackButton();

    if ($(window).width() < 500) {
        initMobileMenu();
        if ($('#home-hamburger').length) {
            initChangeHomeMenu();
        }
        else {
            $('.category-header').css('display', 'none');
        }
        swapLearnDiv();
        learnDivSwapped = true;
    }
});

// WINDOW
$(window).resize(function() {
    if($(window).width() < 500) {
        if ($('#home-hamburger').length) {
            initChangeHomeMenu();
            if (!learnDivSwapped) {
                swapLearnDiv();
                learnDivSwapped = true;
            }
        }
        else {
            $('.category-header').css('display', 'none');
        }
    } else {
        if ($('#menu-modal').is(':visible')) {
            $('#menu-modal').fadeOut(200, function() {
                $('#main-content').fadeIn(200, function() {
                    // FIXME: find a way to return to previous scroll position
                    // prior to opening the modal
                    $('html, body').animate({
                        scrollTop: currentScrollPosition
                    }, 0);
                });
            });
        }
        if ($('#home-hamburger').length) {
            clearInterval(mobileInterval);
            if (learnDivSwapped) {
                swapLearnDiv();
                learnDivSwapped = false;
            }
        }
        else {
            $('.category-header').css('display', 'block');
        }
    }
});
