
var targetMenu = document.querySelector("#overlay");
var targetModal = document.querySelector("#modal");

var $div = $("#navmenu");
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.attributeName === "class") {
      //var attributeValue = $(mutation.target).prop(mutation.attributeName);
      //console.log("Class attribute changed to:", attributeValue);
      if (mutation.target.classList.contains('w--open')) {
        bodyScrollLock.lock(targetMenu);
      } else {
        bodyScrollLock.unlock(targetMenu);
      }
    }
  });
});
observer.observe($div[0], {
  attributes: true
});

$(document).ready(function() {
 $('.modal-open').click(function(e) {
  e.preventDefault();
  bodyScrollLock.lock(targetModal);
 });
 $('.modal-close').click(function(e) {
  e.preventDefault();
  bodyScrollLock.unlock(targetModal);
 });
});
