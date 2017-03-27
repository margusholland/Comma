$(function() {
    $('.tolower').hover(function() {
        $('#text-body p').addClass('lower')
    }, function() {
        $('#text-body p').removeClass('lower')
    });
    $('.toupper').hover(function() {
        $('#text-body p').addClass('upper')
    }, function() {
        $('#text-body p').removeClass('upper')
    });
    $('.totitle').hover(function() {
        $('#text-body p').addClass('title')
    }, function() {
        $('#text-body p').removeClass('title')
    });
    $('.tosentence').hover(function() {
        $('#text-body p').addClass('sentence')
    }, function() {
        $('#text-body p').removeClass('sentence')
    });
});