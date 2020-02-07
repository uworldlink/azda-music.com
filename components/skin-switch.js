
themeSelect(current_theme);

function themeSelect(state) {
	var auto_icon = "url(https://uploads-ssl.webflow.com/5cb8748fb2c690ee31a27874/5e2eef7b0421c294957c8b27_auto-mode-01.svg)";
	var light_icon = "url(https://uploads-ssl.webflow.com/5cb8748fb2c690ee31a27874/5e25d924bfb39b331cd06007_sun.svg)";
	var dark_icon = "url(https://uploads-ssl.webflow.com/5cb8748fb2c690ee31a27874/5e25d995e8d47e509e9e452e_moon.svg)";
	var current = document.getElementById("current-mode");
	var theme_1 = document.getElementById("theme-1");
	var theme_2 = document.getElementById("theme-2");
	
  if (state == 0) {
    current.style.backgroundImage=auto_icon;
    theme_1.style.backgroundImage=light_icon;
    theme_2.style.backgroundImage=dark_icon;
    $('.theme-text-1').text("Light");
    $('.theme-text-2').text("Dark");
    $('.theme-1-mode').attr("whenClick", "setMode('1')");
    $('.theme-2-mode').attr("whenClick", "setMode('2')");
  } 
  else if (state == 1) {
    current.style.backgroundImage=light_icon;
    theme_1.style.backgroundImage=dark_icon;
    theme_2.style.backgroundImage=auto_icon;
    $('.theme-text-1').text("Dark");
    $('.theme-text-2').text("Auto");
    $('.theme-1-mode').attr("whenClick", "setMode('2')");
    $('.theme-2-mode').attr("whenClick", "setMode('0')");
  }
  else if (state == 2) {
    current.style.backgroundImage=dark_icon;
    theme_1.style.backgroundImage=light_icon;
    theme_2.style.backgroundImage=auto_icon;
    $('.theme-text-1').text("Light");
    $('.theme-text-2').text("Auto");
    $('.theme-1-mode').attr("whenClick", "setMode('1')");
    $('.theme-2-mode').attr("whenClick", "setMode('0')");
  }
}

$(document).ready(function() {
	var anchors = document.getElementsByTagName('*');
	for(var i = 0; i < anchors.length; i++) {
		var anchor = anchors[i];
		anchor.onclick = function() {
			code = this.getAttribute('whenClick');
			eval(code);
		}
	}
})
									
function setMode(mode){
	var isStorageEnabled = ! (typeof localStorage == 'undefined');
	if(isStorageEnabled){
		localStorage.setItem('themeSwitch', mode);
	}
	changeSkin(mode);
	if (document.getElementById('player-skin')){
		changePlayerSkin(mode);
	}
}

function changeSkin(set_skin){
	if(set_skin == 0){
		$('#skin').attr("href", auto_theme);
	}
	if(set_skin == 1){
		$('#skin').attr("href", light_theme);
	}
	if(set_skin == 2){
		$('#skin').attr("href", dark_theme);
	}
	themeSelect(set_skin);
}

function changePlayerSkin(set_skin){
	if(set_skin == 0){
		$('#player-skin').attr("href", auto_skin_player);
	}
	if(set_skin == 1){
		$('#player-skin').attr("href", light_skin_player);
	}
	if(set_skin == 2){
		$('#player-skin').attr("href", dark_skin_player);
	}
}
