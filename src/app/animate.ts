import $ from 'jquery';
export function	animateCss(callee,animationName, callback) {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$(callee).addClass('animated ' + animationName).one(animationEnd, function() {
		$(callee).removeClass('animated ' + animationName);
		if (callback) {
			callback();
		}
	});
	return this;
}