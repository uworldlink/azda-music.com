function theme_detect {
  if ((localStorage.getItem('theme') === null || localStorage.getItem('theme') == "auto")) {
    var theme = "light";
    if(!window.matchMedia) {
      //matchMedia method not supported
      return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //OS theme setting detected as dark
      var theme = "dark";
    }
    var current_theme = "auto";
  }
  else if (localStorage.getItem('theme') == "light") {
    var theme = "light";
    var current_theme = theme;
  }
  else if (localStorage.getItem('theme') == "dark") {
    var theme = "dark";
    var current_theme = theme;
  }
  document.documentElement.setAttribute("data-theme", theme);
}
theme_detect();
