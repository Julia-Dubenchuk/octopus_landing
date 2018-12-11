function hideMenuPopup() {
  isOpen = false;
  $(".header-menu__pop").css("visibility", "hidden");
  $(".hamburger-inner__top").removeClass('hamburger-inner__top--animation');
  $(".hamburger-inner__middle").removeClass('hamburger-inner__middle--animation');
  $(".hamburger-inner__bottom").removeClass('hamburger-inner__bottom--animation');
}

function showMenuPopup() {
  isOpen = true;
  $(".header-menu__pop").css("visibility", "visible");
  $(".hamburger-inner__top").addClass("hamburger-inner__top--animation");
  $(".hamburger-inner__middle").addClass("hamburger-inner__middle--animation");
  $(".hamburger-inner__bottom").addClass("hamburger-inner__bottom--animation");
}

var isOpen = false;
var widthScreen = window.screen.width;
$(function () {
  $('.hamburger-box').on('click', function (e) {
    if (isOpen) {
      hideMenuPopup();
    } else {
      showMenuPopup();
    }
  });
});
$(function () {
  $("nav > ul > li").mouseleave(function () {
    hideMenuPopup();
  });
});

  $(function () {
    $("nav > ul > li").mouseenter(function () {
      showMenuPopup();
      if(widthScreen <= 600){
        isOpen = false;
      }
    });
  });

var showingTooltip;

document.onmouseover = function(e) {
  var target = e.target;

  var tooltip = target.getAttribute('data-tooltip');
  if (!tooltip) return;

  var tooltipElem = document.createElement('div');
  tooltipElem.className = 'paginator__tooltip';
  tooltipElem.innerHTML = tooltip;
  document.body.appendChild(tooltipElem);

  var coords = target.getBoundingClientRect();
  var top = coords.top - 20;
  tooltipElem.style.top = top + 'px';

  showingTooltip = tooltipElem;
};
document.onmouseout = function(e) {
  if (showingTooltip) {
    document.body.removeChild(showingTooltip);
    showingTooltip = null;
  }
};



