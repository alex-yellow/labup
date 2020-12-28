;(function($, undefined) {
	
	/***/
	var objs = {
	'.title-page .block-96' : 'fadeIn d2',
	'.title-page .blocklist-7 .item' : 'zoomIn d2',
	'.title-page .block-13' : 'fadeIn d2',
	'.title-page .block-73' : 'fadeInUp',
	'.title-page .widget-82' : 'fadeIn d2',
	'.title-page .news-59 .item' : 'zoomIn d2',
	'.title-page .block-93' : 'fadeInUp',
	'.title-page .block-90' : 'fadeInLeft'
	};
	/***/
	
	
	$(function() {
		for (var i in objs) {
			$(i).attr('data-s3-animator', objs[i]);
		}
	})
	var url = '/g/s3/misc/animator/1.0.0/css/s3.animator.scss.css';
	$.get(url, function(){
                    $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
                    if (!window.s3Animator) {
					$.getScript('/g/s3/misc/animator/1.1.0/js/s3.animator.js').done(function() {
						window.s3Animator.once = true;
					});
	}
    });
})(jQuery)