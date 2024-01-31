let dynamic_island = document.getElementById('dynamic-island');
let music_poster = document.getElementById('music-poster');
dynamic_island.addEventListener('mouseover', dynamic_island_hover);
dynamic_island.addEventListener('mouseleave', dynamic_island_hover_remove);
dynamic_island.addEventListener('click', dynamic_island_click);


// checking the screen 
if ((document.getElementById('screen').classList.contains('lock-screen')) == false){
    document.getElementById('lock-screen-icon').style.display = 'none';
    document.getElementById('music-icon').style.display = 'flex';
}
else if(document.getElementById('screen').classList.contains('lock-screen')){
    document.getElementById('music-icon').style.display = 'none';
    document.getElementById('lock-screen-icon').style.display = 'block';
}
//screen checking ends here

//function on hovering and click the dynamic island
function dynamic_island_hover(){
    if ((document.getElementById('screen').classList.contains('lock-screen')) == false){
        dynamic_island.classList.add('dynamic-island-hover');
        music_poster.classList.add('music-poster-hover-animation');
        document.getElementById('about-music').style.display = 'inline';
        document.getElementById('bottom-hr').style.marginTop = '74px';
    }
}
function dynamic_island_hover_remove(){
    dynamic_island.classList.remove('dynamic-island-hover');
    music_poster.classList.remove('music-poster-hover-animation');
    document.getElementById('about-music').style.display = 'none';
    document.getElementById('song-status').style.display = 'none';
    dynamic_island.classList.remove('dynamic-island-click');
    document.getElementById('bottom-hr').style.marginTop = '98px'

}

function dynamic_island_click(){
    document.getElementById('song-status').style.display = 'flex';
    dynamic_island.classList.add('dynamic-island-click');
    document.getElementById('bottom-hr').style.marginTop = '39px'
}
//hover and click functino's section ends here

//this function will show or hide the lock screen and password screen;
function show_lock_screen(){
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('password-screen').style.display = 'flex';
}
function hide_lock_screen(){
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('lock-screen').style.display = 'block';
}
// this code is for the time and date
let myvar = setInterval(time , 1000);//to check the time every second
function time(){
    const hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    if (minutes<10){
        minutes = '0'+minutes;
    }
    document.getElementById('time').innerHTML = hours+":"+minutes;
}
date();
function date(){
    const daynumber = new Date().getDay();
    const monthnumber = new Date().getMonth();
    const date = new Date().getDate();
    let day_lst = ["Monday","Tuesday","Thrusday","Friday","Saturday","Sunday"];
    let day = 0;
    if (daynumber!=0){
      day = day_lst[daynumber-1];
    }
    else{
      day = day_lst[day_lst.length-1];
    }
    let month_lst = ["January","February","March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month  = month_lst[monthnumber-1];
    document.getElementById('date').innerHTML = day+", "+month+" "+date;
}
//time and date section ends here

//these function are for the buttons of passoword screen
var passoword = '51515';
let entered_password = '';
let password_length = 5;
var myTimeout = "";
let buttons_lst = ['dot1', 'dot2', 'dot3', 'dot4', 'dot5'];
count = 0;
function button_pressed(num){
  entered_password += num;
  if(passoword[count] != num){
    console.log('hello');
    entered_password = '';
    count = 0;
    for (let i = 0; i<5; i++){
      document.getElementById(buttons_lst[i]).style.backgroundColor = 'transparent';
    }
  }
  else{
    if(count == 0){
      document.getElementById('dot1').style.backgroundColor = 'white';
      count += 1;
    }
    else if(count == 1){
      document.getElementById('dot2').style.backgroundColor = 'white';
      count += 1;
    }
    else if(count == 2){
      document.getElementById('dot3').style.backgroundColor = 'white';
      count += 1;
    }
    else if(count == 3){
      document.getElementById('dot4').style.backgroundColor = 'white';
      count += 1;
    }
    else if(count == 4){
      document.getElementById('dot5').style.backgroundColor = 'white';
      count += 1;
      myTimeout = setTimeout(clear_dot_background, 100);
    }
    if (entered_password.length == password_length){
      console.log('done');
    }
  }
}
function clear_dot_background(){
  for (let i = 0; i<5; i++){
    document.getElementById(buttons_lst[i]).style.backgroundColor = 'transparent';
    entered_password = '';
    count = 0;
    clearTimeout(myTimeout);
  }
}



//this function is for the swipe on screen
(function() {
    function dir() {
      a = x - x1, b = y - y1;
      if (!(parseInt(Math.sqrt(a * a + b * b), 10) < THRESHOLD)) {
        if (x1 - x > Math.abs(y - y1)) {
          return "left";
        }
        if (x - x1 > Math.abs(y - y1)) {
          return "right";
        }
        if (y1 - y > Math.abs(x - x1)) {
          return "up";
        }
        if (y - y1 > Math.abs(x - x1)) {
          return "down";
        }
      } else {
        return "none";
      }
    }
    THRESHOLD = 15;
    x = y = x1 = y1 = 0;
    recordedTime = (new Date).getTime();
    document.getElementById('phone-frame').addEventListener("touchstart", function(a) {
      50 < (new Date).getTime() - recordedTime && (x = parseInt(a.changedTouches[0].pageX, 10), y = parseInt(a.changedTouches[0].pageY, 10), recordedTime = (new Date).getTime());
    }, !1);
    document.getElementById('phone-frame').addEventListener("touchend", function(a) {
      x1 = x;
      y1 = y;
      x = parseInt(a.changedTouches[0].pageX, 10);
      y = parseInt(a.changedTouches[0].pageY, 10);
      recordedTime = (new Date).getTime();
    }, !1);
    document.getElementById('phone-frame').addEventListener("mousedown", function(a) {
      50 < (new Date).getTime() - recordedTime && (x = a.clientX, y = a.clientY, recordedTime = (new Date).getTime());
    }, !1);
    document.getElementById('phone-frame').addEventListener("mouseup", function(a) {
      x1 = x;
      y1 = y;
      x = a.clientX;
      y = a.clientY;
      if (dir() == 'up'){
        show_lock_screen();
      }
      else if(dir() == 'down'){
        hide_lock_screen();
      }
      recordedTime = (new Date).getTime();
    }, !1);
    document.documentElement.style.userSelect = "none";
  })();
document.addEventListener('swiped-up',show_lock_screen());