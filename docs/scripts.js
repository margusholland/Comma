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
    $('.tosingleline').hover(function() {
        $('#text-body p.empty').addClass('hidden')
    }, function() {
        $('#text-body p.empty').removeClass('hidden')
    });
    $('.toellipsis').hover(function() {
        $('#text-body .dots').addClass('hidden')
        $('#text-body .ellipsis').removeClass('hidden')
    }, function() {
        $('#text-body .dots').removeClass('hidden')
        $('#text-body .ellipsis').addClass('hidden')
    });
    $('.toperiodspace').hover(function() {
        $('#text-body .space').removeClass('hidden')
    }, function() {
        $('#text-body .space').addClass('hidden')
    });
    $('.tosinglespace').hover(function() {
        $('#text-body .multispace').addClass('hidden')
    }, function() {
        $('#text-body .multispace').removeClass('hidden')
    });
    $('.tocount').hover(function() {
        $(this).find('.action').addClass('hidden')
        $(this).find('.count').removeClass('hidden')
    }, function() {
        $(this).find('.action').removeClass('hidden')
        $(this).find('.count').addClass('hidden')
    });
});