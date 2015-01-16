$(document).ready(function() {
 var arr = ["#home", "#useage", "#about"];
  if (window.location.hash == "" || window.location.hash == "#home") {
  } else if ($.inArray(window.location.hash, arr) !== -1) {
    $(window.location.hash).slideDown(300);
    $(window.location.hash + "button").addClass("disabled");
  };
});
