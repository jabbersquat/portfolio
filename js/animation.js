gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);


//Logo hover animation
// var target = document.querySelector("#bt-logo");
// target.addEventListener("mouseover", btOver, false);
// target.addEventListener("mouseout", btOut, false);

// function btOver() {
//    tl.play();
// }
// function btOut() {  
//    tl.reverse();
// }

// var tl = gsap.timeline({defaults: {duration: 0.25, ease: 'power1.inOut'}, paused: true});
// tl
// .set('#t1,#t2,#t3,#t4,#t5,#t6,#t7', {svgOrigin: '13 3'})
// .to('#t1,#t7', {scaleX: 1.5},'samezies')
// .to('#t2,#t6', {scaleX: 2},'samezies')
// .to('#t3,#t5', {scaleX: 3},'samezies')
// .to('#t4', {scaleX: 6},'samezies')
// .to(['#b-loop'], {x: -5},'samezies')
// .to('#b', {duration: 0.5, x: 7},'samezies+=0.05')
// .to('#cross1', {x: -3, y: 1},'samezies+=0.2')
// .to('#cross2', {x: -3, y: -1},'samezies+=0.2')
// .to('#cross3', {y: 1},'samezies+=0.2')
// .to('#cross4', {y: -1},'samezies+=0.2');


// Dark/Light Mode Toggle
const toggleDark = document.getElementById('theme-switcher');
const currentTheme = localStorage.getItem("theme");


if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
};

// Listen for a click on the button 
toggleDark.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {

    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});
