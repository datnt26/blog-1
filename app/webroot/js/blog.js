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
                                    '<a href="javascript:void(0">' +
                                        '<div class="post-header">' +
                                            '<div class="post-header-avatar">' +
                                                '<a href="javascript:void(0">' +
                                                    '<img src="/blog' +  data.User.avatar +'" alt="" height="35px" width="35px" class="media-object img-rounded">' +
                                                '</a>' +
                                            '</div>' +
                                            '<div class="post-header-body">' +
                                                '<span>' +
                                                    '<a href="javascript:void(0">' +
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
                                      '<a href = "javascript:void(0">' +
                                         '<span  data-toggle="tooltip" data-placement="bottom" title="Like">' +
                                            '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>  Like' +
                                         '</span>' +
                                      '</a>' +
                                   '</div>' +
                                   '<div align="center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href="javascript:void(0">' +
                                         '<span  data-toggle="tooltip" data-placement="bottom" title="Comment">' +
                                            '<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>  Comment' +
                                         '</span>' +
                                      '</a>' +
                                   '</div>' +
                                   '<div align="center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href="javascript:void(0">' +
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
                    // re active createComment();
                    createComment();
                }
            });
    });
    $(".load-more").click(function(){
        // Each page has 5 posts
        var currentPage = Math.floor($("#main").children("div").length / 5) + 1;
        $.ajax({
                method: "POST",
                url: '/blog/posts/loadMore',
                dataType: 'json',
                data: {
                    currentPage : currentPage
                },
                success: function (data) {
                    $.each(data, function(k,v) {
                        console.log(v);
                        var html =
                        '<div class="panel panel-default">' +
                            '<div class="panel-heading" >' +
                                '<h3 class="panel-title">' +
                                    '<a href="javascript:void(0">' +
                                        '<div class="post-header">' +
                                            '<div class="post-header-avatar">' +
                                                '<a href="javascript:void(0">' +
                                                    '<img src="/blog' +  v.User.avatar +'" alt="" height="35px" width="35px" class="media-object img-rounded">' +
                                                '</a>' +
                                            '</div>' +
                                            '<div class="post-header-body">' +
                                                '<span>' +
                                                    '<a href="javascript:void(0">' +
                                                        v.User.username +
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
                                        v.Post.content +
                                   '</p>' +
                                '</div>' +
                                '<div style = "border-top:2px solid #EDEDED;padding-top:10px">' + 
                                   '<div align = "center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href = "javascript:void(0">' +
                                         '<span  data-toggle="tooltip" data-placement="bottom" title="Like">' +
                                            '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>  Like' +
                                         '</span>' +
                                      '</a>' +
                                   '</div>' +
                                   '<div align="center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href="javascript:void(0">' +
                                         '<span  data-toggle="tooltip" data-placement="bottom" title="Comment">' +
                                            '<span class="glyphicon glyphicon-comment" aria-hidden="true"></span>  Comment' +
                                         '</span>' +
                                      '</a>' +
                                   '</div>' +
                                   '<div align="center" class = "col-xs-4 col-sm-4 col-md-4">' +
                                      '<a href="javascript:void(0">' +
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
                                '<img style = "margin-bottom: 4px" class="img-rounded" src="/blog' + v.User.avatar + '" height="25px" width="25px">' +
                                '<input class = "comment-typing" id = "' + v.Post.id + '" placeholder="Write a comment..."  style="width: 92%;margin-top: 15px;">' +
                            '</div>' +
                        '</div>';
                        // append new post
                        $('#main').append(html);
                    });
                    // re active createComment();
                    createComment();
                }
            });
    });
    createComment();
});
function createComment() {
    $('input').on('keypress', function (e) {
        if (e.which === 13) {
            var postId = this.id;
            var parent_id = null;
            var message = $(this).val();
            var type = $(this).attr('class');
            if (type == 'sub-comment-typing') {
                parent_id = $(this).closest('div').attr('id');
                console.log(parent_id);
            }
            $.ajax({
                    method: "POST",
                    url: '/blog/comments/addComment',
                    dataType: 'json',
                    data: {
                        postId : postId,
                        message : message,
                        parent_id : parent_id
                    },
                    success: function (data) {
                        if (type == 'sub-comment-typing') {
                            var html =
                                    '<div class = "sub-comment-item">' + 
                                        '<div class = "comment">' + 
                                            '<div class = "comment-avatar-user">' + 
                                                '<a href="javascript:void(0">' + 
                                                    '<img src="/blog' + data[0].avatar + '" alt="" height="20px" width="20px" class="media-object img-rounded">' +
                                                '</a>' +
                                            '</div>' + 
                                            '<div class="comment-body">' +
                                                '<p style = "margin: 0;padding: 0;" class="comment">' +
                                                    '<span>' + 
                                                        '<a href="javascript:void(0">' +
                                                            data[0].username +
                                                        '</a>' + 
                                                    '</span> ' + data[0].message +
                                                '</p>' +
                                                '<div>' + 
                                                    '<small>' +
                                                        '<span> <a href="javascript:void(0">Like </a></span> <span> <a href="javascript:void(0">Comment </a></span>' +
                                                    '</small>' +
                                                    '<small>' +
                                                        '<span><time>2 min </time></span><span>ago</span>' +
                                                    '</small>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' ;
                            $('.sub-comment#parent-comment-' + parent_id).append(html);
                        }
                        else {
                            var html = 
                            '<div class="comment">' +
                                '<div class="comment-avatar-user">' +
                                    '<a href="javascript:void(0">' +
                                        '<img src="/blog' + data[0].avatar + '" alt="" height="27px" width="27px" class="media-object img-rounded">' +
                                    '</a>' +
                                '</div>' +
                                '<div class="comment-body" id = "' + data[0].id + '">' +
                                    '<div class="sub-comment" id="parent-comment-' + data[0].id + '">' +
                                        '<p class="" style="margin: 0;padding: 0;">' +  
                                            '<span>' +
                                                '<a href="javascript:void(0">' +
                                                    data[0].username +
                                                '</a>' +
                                            '</span> ' + data[0].message +
                                        '</p>' +
                                        '<p class="comment" style = "margin: 0;padding: 0;">' +
                                            '<small>' +
                                                '<span>' +
                                                    '<a href="javascript:void(0">Like </a>' +
                                                '</span>' +
                                                '<span>' +
                                                    '<a href="javascript:void(0">Comment </a>' +
                                                '</span>' +
                                            '</small>' +
                                            '<small>' +
                                                '<span><time>22 min </time></span>' +
                                                '<span>ago</span>' +
                                            '</small>' +
                                       '</p>' +
                                    '</div>' +
                                    '<img src="/blog' + data[0].avatar + '" alt="" height="20px" width="20px" style="margin-bottom : 4px" class="img-rounded">' +
                                    '<input class="sub-comment-typing" id="' + postId +'" placeholder="Write a comment..." style="height:23px;width: 92%;margin-top: 10px;">' +
                                '</div>' +
                            '</div>';
                            $('.comment-list').append(html);
                        }
                        $('input').val('');
                        createComment();
                    }
            });
        }
    });
}



