gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, SplitText);


// Sidebar
const sidebarBtn = document.getElementById('bt-logo-wrapper');
const iconSvg = document.getElementById("bt-logo");
let sidebarInactive = true;

// Icon Animation
const iconTl = gsap.timeline({defaults: {duration: 0.25, ease: 'power1.inOut'}, paused: true});
iconTl
.set('#t1,#t2,#t3,#t4,#t5,#t6,#t7', {svgOrigin: '13 3'},'set')
.set('#icon-whole', {svgOrigin: '8 6'},'set')
.to('#t1,#t7', {scaleX: 1.5},'icon')
.to('#t2,#t6', {scaleX: 2},'icon')
.to('#t3,#t5', {scaleX: 3},'icon')
.to('#t4', {scaleX: 6},'icon')
.to(['#b-loop'], {x: -5},'icon')
.to('#b-inner', {duration: 0.5, x: -3},'icon+=0.05')
.to('#b', {duration: 0.5, x: 5},'icon+=0.05')
.to('#t', {duration: 0.5, x: -2},'icon+=0.05')
.to('#cross1', {y: 1},'icon+=0.2')
.to('#cross2', {y: -1},'icon+=0.2')
.to('#cross3', {y: 1},'icon+=0.2')
.to('#cross4', {y: -1},'icon+=0.2')
.addLabel('plus')
.to('#icon-whole', {scale: 0.95, rotate:45},'x')
.addLabel('xend');

// Sidebar Expand
let topStored  = 0;
const sidebarExpandTl = gsap.timeline({ 
  defaults: { duration: 0.25 }, 
  paused:true, 
  onReverseComplete: function() {
    gsap.to(window, {duration: 0.5, scrollTo: topStored})
    gsap.set('#site-main, #site-footer, .site-sidebar, .intro, .section-hr__header', { clearProps: "all" });
  }
});

sidebarExpandTl
  .to('.site-sidebar', { width: '100%', duration: 0.5 },'start')
  .to('.site-sidebar--backing', { opacity:0.2, duration: 0.2 },'start')
  .to('#site-main, #site-footer, .section-hr__header', { height: 0, opacity: 0, duration: 0.5 },'start')
  .to('.intro, .eightbithead-opacity', { opacity: 0.1 },'start')
  .to('.site-sidebar__1 span', {opacity: 1, stagger: {each: 0.2}}, 'start')
  .to('.site-sidebar__2 span', {opacity: 1, stagger: {each: 0.2}}, 'start+=0.15')
  .to('.site-sidebar__3 span', {opacity: 1, stagger: {each: 0.2}}, 'start+=0.3');

function btOver() {
  if(sidebarInactive) {
    iconTl.tweenTo('plus');
  }
}
function btOut() { 
  if(sidebarInactive) {
    iconTl.reverse();
  }
}
function btClick() {
  document.body.classList.toggle("sidebar-active");
  if (sidebarInactive) {
    topStored  = window.pageYOffset || document.documentElement.scrollTop;
    sidebarInactive = false;
    sidebarExpandTl.play();
    iconTl.tweenTo('xend');
  } else {
    sidebarExpandTl.reverse();
    iconTl.reverse();
    sidebarInactive = true;
  }
}

sidebarBtn.addEventListener("mouseover", btOver, false);
sidebarBtn.addEventListener("mouseout", btOut, false);
sidebarBtn.addEventListener("click", btClick, false);



// Dark/Light Mode Toggle
const toggleDark = document.getElementById('theme-switcher');

var darkMode_animate = gsap.timeline({defaults: {ease: 'power1.inOut'}, paused: true});
  darkMode_animate.to('#ray-line', {strokeDashoffset: 10,duration: 0.2},'start')
  .to('#sun-icon', {morphSVG:'#moon-icon',duration:0.3}, 'start+=0.1');


// Listen for a click on the button 
toggleDark.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  darkMode_animate.reverse(0);
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
    darkMode_animate.play();
  }
  localStorage.setItem("theme", theme);
});
