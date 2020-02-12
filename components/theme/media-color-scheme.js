var current_theme = localStorage.getItem('theme');
theme_detect(current_theme);

function theme_detect(current_theme) {
  if ((current_theme === null) || (current_theme == 'system')) {
    var theme = "light";
    if(!window.matchMedia) {
      //matchMedia method not supported
      return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //OS theme setting detected as dark
      var theme = "dark";
    }
  } 
  else if (current_theme == 'light') {
    var theme = "light";
  }
  else if (current_theme == 'dark') {
    var theme = "dark";
  }
  theme_apply(theme);
};

var theme_OS = window.matchMedia('(prefers-color-scheme: light)');
theme_OS.addEventListener('change', function (e) {
  'use strict';
  if ((localStorage.getItem('theme') === null) || (localStorage.getItem('theme') == 'system')) {
    if (e.matches) {
      var theme = "light";
    } else {
      var theme = "dark";
    }
    theme_apply(theme);
  }
});

function theme_apply(theme) {
  document.documentElement.setAttribute("data-theme", theme);
};
