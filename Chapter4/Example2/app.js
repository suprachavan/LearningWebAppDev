/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */


var main = function () {
    'use strict';

    var addCommentFromInputBox = function () {
        var $newComment;
        var newClass1 = 'user1';
        var newClass2 = 'user2';

        if ($('.comment-input input').val() !== '') {
            $newComment = $('<p class='+newClass1+'>').
            text($('.comment-input input').val());
            $newComment.hide();  
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $('.comment-input input').val('');
        }
        if  ($('.comment-input2 input').val() !== '') {
            $newComment = $('<p class='+newClass2+'>').
            text($('.comment-input2 input').val());
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $('.comment-input2 input').val('');
        }
    };

    $('.comment-input button').on('click', function () {
        addCommentFromInputBox();
    });

    $('.comment-input input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    $('.comment-input2 button').on('click', function () {
        addCommentFromInputBox();
    });

    $('.comment-input2 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
