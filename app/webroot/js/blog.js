$(document).ready(function() {
    $(".post").click(function(){
        var content = $('.post-message').val();
        $.ajax({
                method: "POST",
                url: '/blog/posts/create',
                dataType: 'json',
                data: {
                    content : content
                },
                success: function (data) {
                    var html =
                        '<div class="panel panel-default">' +
                            '<div class="panel-heading" >' +
                                '<h3 class="panel-title">' +
                                    '<a href="#">' +
                                        '<div class="post-header">' +
                                            '<div class="post-header-avatar">' +
                                                '<a href="#">' +
                                                    '<img src="/blog' +  data.User.avatar +'" alt="" height="35px" width="35px" class="media-object img-rounded">' +
                                                '</a>' +
                                            '</div>' +
                                            '<div class="post-header-body">' +
                                                '<span>' +
                                                    '<a href="#">' +
                                                        data.User.username +
                                                    '</a>' +
                                                '</span><br>' +
                                                '<small>' +
                                                    '<span>' +
                                                        '<time>22 minutes</time>' +
                                                    '</span>' +
                                                    '<span>ago</span>' +
                                                '</small>' +
                                            '</div>' +
                                        '</div>' +
                                    '</a>' +
                                '</h3>' +
                            '</div>' +
                            '<div class = "panel-body">' +
                                '<div>' + 
                                   '<p class = "text-post">' +
                                        data.Post.content +
                                   '</p>' +
                                '</div>' +
                                '<div style = "border-top:2px solid #EDEDED;padding-top:10px">' + 
                                   '<div align = "center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href = "#">' +
                                         '<span  data-toggle="tooltip" data-placement="bottom" title="Like">' +
                                            '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>  Like' +
                                         '</span>' +
                                      '</a>' +
                                   '</div>' +
                                   '<div align="center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href="#">' +
                                         '<span  data-toggle="tooltip" data-placement="bottom" title="Comment">' +
                                            '<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>  Comment' +
                                         '</span>' +
                                      '</a>' +
                                   '</div>' +
                                   '<div align="center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href="#">' +
                                         '<span  data-toggle="tooltip" data-placement="bottom" title="Share">' +
                                            '<span class="glyphicon glyphicon-share" aria-hidden="true"></span>  Share' +
                                         '</span>' +
                                      '</a>' +
                                   '</div>' +
                               '</div>' +
                            '</div>' +
                            '<div class="panel-footer">' +
                                '<div class = "comment-list" >' +
                                '</div>' +
                                '<img style = "margin-bottom: 4px" class="img-rounded" src="/blog' + data.User.avatar + '" height="25px" width="25px">' +
                                '<input class = "comment-typing" id = "' + data.Post.id + '" placeholder="Write a comment..."  style="width: 92%;margin-top: 15px;">' +
                            '</div>' +
                        '</div>';
                    // append new post
                    $(html).prependTo('#main');
                    //empty input after create post success
                    $('.post-message').val('');
                }
            });
    });
});



