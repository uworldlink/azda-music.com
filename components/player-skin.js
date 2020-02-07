function load_player_CSS(ref) {
  var playerId = 'player-skin';
  if (!document.getElementById(playerId)) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = playerId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = ref;
    link.media = 'all';
    head.appendChild(link);
  }
}
var auto_skin_player = 'https://cdn.jsdelivr.net/gh/uworldlink/web/azda%20website/css/player/default-player.min.css';
var light_skin_player = 'https://cdn.jsdelivr.net/gh/uworldlink/web/azda%20website/css/player/light-player.min.css';
var dark_skin_player = 'https://cdn.jsdelivr.net/gh/uworldlink/web/azda%20website/css/player/dark-player.min.css';

if ((localStorage.getItem('themeSwitch') === null) || (localStorage.getItem('themeSwitch') == 0)) {
  load_player_CSS(auto_skin_player);
}
else if (localStorage.getItem('themeSwitch') == 1) {
  load_player_CSS(light_skin_player);
}
else if (localStorage.getItem('themeSwitch') == 2) {
  load_player_CSS(dark_skin_player);
}
