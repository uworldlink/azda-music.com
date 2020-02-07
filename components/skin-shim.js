function loadCSS(ref) {
  var cssId = 'skin';
  if (!document.getElementById(cssId)) {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = cssId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = ref;
  link.media = 'all';
  head.appendChild(link);
  }
}
var auto_theme = 'https://cdn.jsdelivr.net/gh/uworldlink/web/azda%20website/css/default.min.css';
var light_theme = 'https://cdn.jsdelivr.net/gh/uworldlink/web/azda%20website/css/light-theme.min.css';
var dark_theme = 'https://cdn.jsdelivr.net/gh/uworldlink/web/azda%20website/css/dark-theme.min.css';

if ((localStorage.getItem('themeSwitch') === null || localStorage.getItem('themeSwitch') == 0)) {
  loadCSS(auto_theme);
  var current_theme = '0';
}
else if (localStorage.getItem('themeSwitch') == 1) {
  loadCSS(light_theme);
  var current_theme = '1';
}
else if (localStorage.getItem('themeSwitch') == 2) {
  loadCSS(dark_theme);
  var current_theme = '2';
}
