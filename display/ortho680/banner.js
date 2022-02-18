var txt1a = document.getElementById('txt1a'),
	txt1b = document.getElementById('txt1b'),
	txt2a = document.getElementById('txt2a'),
	txt3a = document.getElementById('txt3a'),
	txt3b = document.getElementById('txt3b'),
	txt3c = document.getElementById('txt3c'),
	txt3d = document.getElementById('txt3d'),
	lockup = document.getElementById('lockup'),
	cta = document.getElementById('cta'),
	
	name_hip = document.getElementById('name-hip'),
	name_spine = document.getElementById('name-spine'),
	name_elbow = document.getElementById('name-elbow'),
	name_shoulder = document.getElementById('name-shoulder'),
	name_wrist = document.getElementById('name-wrist'),
	name_ankle = document.getElementById('name-ankle'),
	name_hand = document.getElementById('name-hand'),
	name_knee = document.getElementById('name-knee'),
	
	skeleton = document.getElementById('skeleton-wrapper');

var bones = [
	["foot", -150, -90 ],
	["ankle", -12, 70 ],
	["thigh", 55, -170 ],
	["hips", 90, -180 ],
	["spine", 13 ],
	["rib1", -155, -90 ],
	["rib2", 165, -180 ],
	["rib3", 25, 90 ],
	["rib4", 90, -40 ],
	["rib5", 25, -13 ],
	["collar", 400, -180 ],
	["bicep", -25, 415 ],
	["forearm", 5, -14 ],
	["hand", -90, 90 ],
	["head", 12 ]
]

var animationSkeleton = function() {
	
	gsap.set(skeleton, {rotation:0.01, scale: 1, z: 0.1, transformOrigin:'50% 97.8%'});	
	
	for (i = 0; i < bones.length; i++) { 
		var timeDelay = (i / 5) + (0.1 * i);
		
		if ( bones[i][0] === "head" ||  bones[i][0] === "hips" ||  bones[i][0] === "spine") {
			
			var bone = document.getElementById(bones[i][0]);
		  var boneGroup = document.getElementById(bones[i][0] + '-g');
		  
		  gsap.set(bone, {rotation: bones[i][1], transformOrigin:'50% 50%'});
			
			gsap.to(boneGroup, 1,{y: 250, ease:Power3.easeOut, delay:timeDelay});
			gsap.to(bone, 0.85, {rotation: 0, ease:Power3.easeOut, delay:timeDelay + 0.15});
			
		} else {
			
			var boneRight = document.getElementById(bones[i][0] + '-right');
			var boneLeft = document.getElementById(bones[i][0] + '-left');
		  var boneRightGroup = document.getElementById(bones[i][0] + '-right-g');
			var boneLeftGroup = document.getElementById(bones[i][0] + '-left-g');
			
			gsap.set(boneRight, {rotation: bones[i][1], transformOrigin:'50% 50%'});
			gsap.set(boneLeft, {rotation: bones[i][2], transformOrigin:'50% 50%'});
			
			gsap.to(boneRightGroup, 1, {y: 250, ease:Power3.easeOut, delay:timeDelay});
			gsap.to(boneLeftGroup, 1, {y: 250, ease:Power3.easeOut, delay:timeDelay});
			
			gsap.to(boneRight, 0.85, {rotation: 0, ease:Power3.easeOut, delay:timeDelay + 0.15});
			gsap.to(boneLeft, 0.85, {rotation: 0, ease:Power3.easeOut, delay:timeDelay + 0.15});
		}
		
	}
	
};

var animationNames = function() {
	gsap.to(name_shoulder, 0.5,{opacity: 1, ease:Power0.easeNone, delay:0});
	gsap.to(name_elbow, 0.5,{opacity: 1, ease:Power0.easeNone, delay:0.6});
	gsap.to(name_spine, 0.5,{opacity: 1, ease:Power0.easeNone, delay:1.2});
	gsap.to(name_wrist, 0.5,{opacity: 1, ease:Power0.easeNone, delay:1.8});
	gsap.to(name_hand, 0.5,{opacity: 1, ease:Power0.easeNone, delay:2.4});
	gsap.to(name_hip, 0.5,{opacity: 1, ease:Power0.easeNone, delay:3});
	gsap.to(name_knee, 0.5,{opacity: 1, ease:Power0.easeNone, delay:3.6});
	gsap.to(name_ankle, 0.5,{opacity: 1, ease:Power0.easeNone, delay:4});
}
	

var animation = function() {
	gsap.set(skeleton, {scale: 1, rotation:0.01, transformOrigin:"50% 50%"});
	gsap.set(cta, {scale: 1.2, rotation:0.01, transformOrigin:"226px 214px"});
	
	gsap.delayedCall(0.25, animationSkeleton,);
	gsap.delayedCall(6.5, animationNames,);
	
	gsap.to(skeleton, 0.5,{opacity: 1, ease:Power0.easeNone, delay:0});
	gsap.to(txt1a, 0.5,{opacity: 1, ease:Power0.easeNone, delay:0});
	gsap.to(txt1b, 0.5,{opacity: 1, ease:Power0.easeNone, delay:1.5});
	
	gsap.to([txt1a,txt1b], 0.5,{opacity: 0, ease:Power0.easeNone, delay:5});
	gsap.to(txt2a, 0.5,{opacity: 1, ease:Power0.easeNone, delay:5});
	
	gsap.to(txt2a, 0.5,{opacity: 0, ease:Power0.easeNone, delay:12});
	gsap.to(skeleton, 0.5,{opacity: 0, ease:Power0.easeNone, delay:12});
	gsap.to(txt3d, 0.5,{opacity: 1, ease:Power0.easeNone, delay:13});
	gsap.to(txt3a, 0.5,{opacity: 1, ease:Power0.easeNone, delay:13.35});
	gsap.to(txt3b, 0.5,{opacity: 1, ease:Power0.easeNone, delay:13.70});
	gsap.to(txt3c, 0.5,{opacity: 1, ease:Power0.easeNone, delay:14.05});
	gsap.to(cta, 0.5,{opacity: 1, scale:1, ease:Power0.easeNone, delay:14.4});

  gsap.delayedCall(18, reset);
};
var reset = function() {
	gsap.set([name_shoulder,name_elbow,name_spine,name_wrist,name_hand,name_hip,name_knee,name_ankle], {opacity: 0});
	for (i = 0; i < bones.length; i++) { 
		if ( bones[i][0] === "head" ||  bones[i][0] === "hips" ||  bones[i][0] === "spine") {
		  var boneGroup = document.getElementById(bones[i][0] + '-g');
			gsap.set(boneGroup, {y: 0});			
		} else {
		  var boneRightGroup = document.getElementById(bones[i][0] + '-right-g');
			var boneLeftGroup = document.getElementById(bones[i][0] + '-left-g');
			gsap.set([boneRightGroup,boneLeftGroup], {y: 0});
		}
		
	}
	gsap.to([txt3a,txt3b,txt3c,txt3d,cta], 0.75,{opacity: 0, ease:Power0.easeNone, delay:0});
	gsap.delayedCall(0.8, animation);
}

window.onload = function(e) {
  window.ad = new animation();
};