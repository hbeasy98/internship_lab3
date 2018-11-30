$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
			pos_about_us = $('.about-us').offset().top;
			pos_services = $('.services').offset().top;
			pos_what_we_do = $('.what-we-do').offset().top;
			pos_ours_work = $('.ours-work').offset().top;
			pos_contact = $('.contact').offset().top;

		//console.log(pos_body + " va " + pos_about_us); 

		if( pos_body > (pos_about_us-400)){
			$('.about-us').addClass('sec-show');
		};
		if( pos_body > (pos_services-400)){
			$('.services').addClass('sec-show');
		};
		if( pos_body > (pos_what_we_do-400)){
			$('.what-we-do').addClass('sec-show');
		};
		if( pos_body > (pos_ours_work-400)){
			$('.ours-work').addClass('sec-show');
		};
		if( pos_body > (pos_contact-400)){
			$('.contact').addClass('sec-show');
		};
	});
});