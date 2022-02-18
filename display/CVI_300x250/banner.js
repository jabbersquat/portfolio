var img1 = document.getElementById('img1'),
	img1Wrapper = document.getElementById('img-window1'),
	colorOverlay = document.getElementById('color-overlay'),
	txt1a = document.getElementById('txt1a'),
	txt1c = document.getElementById('txt1c'),
	txt1b_ABN = document.getElementById('txt1b-abn'),
	txt1b_ORMAL = document.getElementById('txt1b-ormal'),
	txt1b_HEA = document.getElementById('txt1b-hea'),
	txt1b_RT = document.getElementById('txt1b-rt'),
	txt1b_RHY = document.getElementById('txt1b-rhy'),
	txt1b_THMS = document.getElementById('txt1b-thms'),
	txt2a = document.getElementById('txt2a'),
	txt2b = document.getElementById('txt2b'),
	txt2c = document.getElementById('txt2c'),
	txt2d = document.getElementById('txt2d'),
	txt2e = document.getElementById('txt2e');

var animation = function() {		
	//Hack to make animations go smooother	
	TweenMax.set([img1Wrapper, img1], {scale: 1, rotation:0.01, z:0, transformOrigin:"50% 50%"});
	TweenMax.set([txt1b_ABN,txt1b_ORMAL,txt1b_HEA,txt1b_RT,txt1b_RHY,txt1b_THMS], {scale:0.75 });
	TweenMax.set(txt1b_ABN, {transformOrigin:"47px 94px" });
	TweenMax.set(txt1b_ORMAL, {transformOrigin:"135px 94px" });
	TweenMax.set(txt1b_HEA, {transformOrigin:"221px 94px" });
	TweenMax.set(txt1b_RT, {transformOrigin:"271px 94px" });
	TweenMax.set(txt1b_RHY, {transformOrigin:"158px 122px" });
	TweenMax.set(txt1b_THMS, {transformOrigin:"231px 122px" });
	
	TweenMax.to(img1, 15,{scale:1.2 });

	TweenMax.to(txt1a, 1,{opacity:1, delay:0.25 });
	TweenMax.to(txt1b_ABN, .35, {opacity:1, scale:1, delay:1.25, ease: Elastic.easeOut.config(2, 1) });
	TweenMax.to(txt1b_ORMAL, .35, {opacity:1, scale:1, delay:1.45, ease: Elastic.easeOut.config(2, 1) });
	
	TweenMax.to(txt1b_HEA, .35, {opacity:1, scale:1, delay:2, ease: Elastic.easeOut.config(2, 1) });
	TweenMax.to(txt1b_RT, .35, {opacity:1, scale:1, delay:2.2, ease: Elastic.easeOut.config(2, 1) });
	
	TweenMax.to(txt1b_RHY, .35, {opacity:1, scale:1, delay:3, ease: Elastic.easeOut.config(2, 1) });
	TweenMax.to(txt1b_THMS, .35, {opacity:1, scale:1, delay:3.4, ease: Elastic.easeOut.config(2, 1) });
	TweenMax.to(txt1c, 1,{opacity:1, delay:4 });
	
	TweenMax.to([txt1a,txt1b_ABN,txt1b_ORMAL,txt1b_HEA,txt1b_RT,txt1b_RHY,txt1b_THMS,txt1c], 1,{opacity:0, delay:7 });
	TweenMax.to(colorOverlay, 1,{opacity:0.75, delay:7 });
	
	TweenMax.to(txt2a, 1,{opacity:1, delay:7 });
	TweenMax.to(txt2b, 1,{opacity:1, delay:8.5 });
	TweenMax.to(txt2c, 1,{opacity:1, delay:10 });
	TweenMax.to(txt2d, 1,{opacity:1, delay:11.5 });
	TweenMax.to(txt2e, 1,{opacity:1, delay:14 });
}

window.onload = function(e) {
  window.ad = new animation();
};