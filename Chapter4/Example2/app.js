/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */


var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;
        var newId1 = "user1";
        var newId2 = "user2";

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.attr('id', newId1);
            $new_comment.hide();  
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
        if  ($(".comment-input2 input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input2 input").val());
            $new_comment.attr('id', newId2);
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input2 input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

    $(".comment-input2 button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input2 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
