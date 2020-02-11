
themeSelect(current_theme);

function themeSelect(state) {
	var auto_icon = "url(https://uploads-ssl.webflow.com/5cb8748fb2c690ee31a27874/5e2eef7b0421c294957c8b27_auto-mode-01.svg)";
	var light_icon = "url(https://uploads-ssl.webflow.com/5cb8748fb2c690ee31a27874/5e25d924bfb39b331cd06007_sun.svg)";
	var dark_icon = "url(https://uploads-ssl.webflow.com/5cb8748fb2c690ee31a27874/5e25d995e8d47e509e9e452e_moon.svg)";
	var current = document.getElementById("current-mode");
	var mode_1 = document.getElementById("theme-1");
	var mode_2 = document.getElementById("theme-2");
	
  if (state == "auto") {
    current.style.backgroundImage=auto_icon;
    mode_1.style.backgroundImage=light_icon;
    mode_2.style.backgroundImage=dark_icon;
    $('.theme-text-1').text("Light");
    $('.theme-text-2').text("Dark");
    $('.theme-1-mode').attr("whenClick", "setMode('auto')");
    $('.theme-2-mode').attr("whenClick", "setMode('dark')");
  } 
  else if (state == "light") {
    current.style.backgroundImage=light_icon;
    mode_1.style.backgroundImage=dark_icon;
    mode_2.style.backgroundImage=auto_icon;
    $('.theme-text-1').text("Dark");
    $('.theme-text-2').text("Auto");
    $('.theme-1-mode').attr("whenClick", "setMode('light')");
    $('.theme-2-mode').attr("whenClick", "setMode('auto')");
  }
  else if (state == "dark") {
    current.style.backgroundImage=dark_icon;
    mode_1.style.backgroundImage=light_icon;
    mode_2.style.backgroundImage=auto_icon;
    $('.theme-text-1').text("Light");
    $('.theme-text-2').text("Auto");
    $('.theme-1-mode').attr("whenClick", "setMode('light')");
    $('.theme-2-mode').attr("whenClick", "setMode('auto')");
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
		localStorage.setItem('theme', mode);
	}
	changeSkin(mode);
}

function changeSkin(mode){
	if(mode == "auto"){
		var theme = "light";
		if(!window.matchMedia) {
			//matchMedia method not supported
			return false;
		} else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
			//OS theme setting detected as dark
			var theme = "dark";
		}
	}
	else {
		var theme = mode;
	}
	document.documentElement.setAttribute("data-theme", theme);
	themeSelect(mode);
}
