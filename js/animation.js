gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

// Intro Animation

var body = document.getElementById('home'),
    headWrap = document.getElementById('eightbithead-wrapper__home'),
    head = document.getElementById('eightbithead__home'),
    title = document.getElementById('title__home'),
    hello = document.getElementById('hello__home'),
    btravs = document.getElementById('name__home');

const chunkSize = 50;
const allbits = [...document.querySelectorAll(".bt-fill")];
var chunkedbits = allbits.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/chunkSize)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }
  resultArray[chunkIndex].push(item);
  return resultArray
}, [])

function clearInlineStyles() {
  let reset = gsap.timeline();
  reset
  .set('#title-wrapper_home, .eightbithead, #eightbithead-wrapper__home, #intro__home, .section-hdr, .section-hr, .section, .section-content, .section-intro, .site-header, .skill-list li, .work-item, .video-wrapper, .footer, .section-contact, .site-sidebar-inner button, .eightbithead-opacity', { clearProps: "all" })
  .add(skillTriggers)
  .add(displayTriggers)
  .add(videoTriggers)
  ;
}


function animate() {

  var tl = gsap.timeline(
    {
      defaults: {duration: 0.5, ease: 'power1.inOut'},
      onComplete: clearInlineStyles,
    });

  var splitName = new SplitText(btravs, {type:'chars'});
  var splitHeader1 = new SplitText('#skills-hdr', {type:'chars'});
  var splitHeader2 = new SplitText('#work-hdr', {type:'chars'});
  var splitHeader3 = new SplitText('#video-hdr', {type:'chars'});

  var chunkedTl = gsap.timeline();
  for(var i = 0; i < chunkedbits.length; i++) {
    if(i == chunkedbits.length - 1 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.15}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 2 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.3}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 3 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.45}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 4 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.6}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 5 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.75}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 6 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.9}), 0.5-i*0.01);
    } else {
      chunkedTl.add(gsap.from(chunkedbits[i], {duration: 0.25, opacity:0}), 0.5-i*0.01)
    }
  }
    tl
    .to(body, {opacity: 1,duration:0.2})
    .from(hello, {opacity:0},'textintro+=0.6')
    .from(hello, {y:40},'textintro+=1.15')
    .from(btravs, {y:40,opacity:0},'textintro+=1.15')
    .add(chunkedTl, 'textintro+=0.15')
    .from(splitName.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}}, 'textintro2')
    .from('#title-wrapper_home', {duration: 0.1, marginLeft: 120},'start+=1')
    .from('.eightbithead', {duration: 1, scale:0.05,marginLeft:40,marginTop:20},'start+=0.5')
    .from('#eightbithead-wrapper__home', {duration: 2, zIndex: 99, opacity: 1, width: '100%', ease: 'power3.inOut'},'start+=0.5')
    .from('.eightbithead-opacity', {duration: 0.5, filter: 'saturate(1)', opacity: 1},'start+=1.25')
    .from('#intro__home', {opacity: 0},'start+=0.5')
    .from('.section-hdr', {opacity:0, stagger: {each: 0.1}},'fadein1-=0.1')
    .from('.section-hr', {scaleX: 0, transformOrigin: '0 0', stagger: {each: 0.1}},'fadein1-=0.1')
    .from(splitHeader1.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.1}},'fadein1-=0.1')
    .from(splitHeader2.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.1}},'fadein1-=0.15')
    .from(splitHeader3.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.1}},'fadein1-=0.2')
    // .addPause()
    .from('.section-intro', {height: 0, transformOrigin: '0 0'},'fadein2+=0.5')
    .from('.section-content', {height: 0, paddingTop: 0, paddingBottom: 0, stagger: {each: 0.1}},'fadein2+=0.5')
    .from('#intro__home', {marginBottom: 0},'fadein2+=0.5')
    .from('.section', {gap: 0},'fadein2+=0.5')
    .from('.site-header', {paddingBottom: 0},'fadein2+=0.5')
    .from('.skill-list li', {opacity:0, stagger: {each: 0.05}},'fadein3')
    .from('.section-intro', {opacity:0, stagger: {each: 0.1}},'fadein3')
    .from('.work-item', {opacity:0, stagger: {each: 0.1}},'fadein3+=0.25')
    .from('.video-wrapper', {opacity: 0},'fadein3+=0.65')
    .from('.footer, .section-contact', {opacity: 0},'fadein3+=0.75')
    .from('.site-sidebar-inner button', {opacity:0, stagger: {each: 0.1}},'fadein3+=0.35')
    ;

  return tl;
}


document.addEventListener('DOMContentLoaded', animate, false);


// Video Scroll Trigger Animation

function videoTriggers() {
  const videos = gsap.utils.toArray('.work-video');

  videos.forEach(function(video, i) {
    
    ScrollTrigger.create({
      trigger: video,
      start: 'top center',
      end: 'bottom center',
      // markers: true,
      onEnter: () => video.play(),
      onEnterBack: () => video.play(),
      onLeave: () => video.pause(),
      onLeaveBack: () => video.pause(),
    });
    
  });
}

// Display Ad Scroll Trigger Animation

function displayTriggers() {
  ScrollTrigger.create({
    trigger: '#display-ads',
    start: 'top center',
    end: 'bottom center',
    // markers: true,
    onEnter: () => tl_main.play(),
    onEnterBack: () => tl_main.play(),
    onLeave: () => tl_main.pause(),
    onLeaveBack: () => tl_main.pause(),
  });
}

// Skill Logo animation
function skillTriggers() {

  let tl_skills = gsap.timeline({paused:true});
  tl_skills.addLabel('start')
  .to('#skill-set-primary .skill-colored', {duration: 0.25, opacity: 1, stagger: {each: 0.15}},'animatein')
  .to('#skill-set-secondary .skill-colored', {duration: 0.25, opacity: 1, stagger: {each: 0.15}},'animatein+=0.2')
  .addLabel('middle')
  .to('.skill-colored', {duration: 4, opacity: 0})
  .addLabel('end');

  ScrollTrigger.create({
    trigger: '#skills',
    start: 'top center',
    end: 'bottom center',
    // markers: true,
    onEnter: () => tl_skills.tweenFromTo("start", "middle"),
    onEnterBack: () => tl_skills.tweenFromTo("start", "middle"),
    onLeave: () => tl_skills.tweenFromTo("middle", "end"),
    onLeaveBack: () => tl_skills.tweenFromTo("middle", "end"),
  });
}


//Logo hover animation

var target = document.querySelector("#bt-logo");
target.addEventListener("mouseover", btOver, false);
target.addEventListener("mouseout", btOut, false);

function btOver() {
   tl.play();
}
function btOut() {  
   tl.reverse();
}

var tl = gsap.timeline({defaults: {duration: 0.25, ease: 'power1.inOut'}, paused: true});
tl
.set('#t1,#t2,#t3,#t4,#t5,#t6,#t7', {svgOrigin: '13 3'})
.to('#t1,#t7', {scaleX: 1.5},'samezies')
.to('#t2,#t6', {scaleX: 2},'samezies')
.to('#t3,#t5', {scaleX: 3},'samezies')
.to('#t4', {scaleX: 6},'samezies')
.to(['#b-loop'], {x: -5},'samezies')
.to('#b', {duration: 0.5, x: 7},'samezies+=0.05')
.to('#cross1', {x: -3, y: 1},'samezies+=0.2')
.to('#cross2', {x: -3, y: -1},'samezies+=0.2')
.to('#cross3', {y: 1},'samezies+=0.2')
.to('#cross4', {y: -1},'samezies+=0.2');


// Dark/Light Mode Toggle

// Select the button
const toggleDark = document.getElementById('theme-switcher');
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  document.body.classList.add("dark-theme");
};

// Listen for a click on the button 
toggleDark.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark-theme");
  
  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark-theme")) {
    // ...then let's make the theme dark
    theme = "dark";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});
