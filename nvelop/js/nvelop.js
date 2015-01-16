/*
 The MIT License (MIT)

 Copyright (c) 2015 Andrew Fang

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

$(document).ready(function() {
  for (var i = 0; i < $(".fillScreen").length; i++) {
    $(".fillScreen")[i].style.height = window.innerHeight + "px";
  }
	$(".page").hide();

  for (var j = 0; j < $(".navbutton").length; j++) {
    $(".navbutton").on("click", show);
  }

});

function show(event) {
	if ($(this).hasClass("disabled")) {
		return false;
	} else {
		event.preventDefault();
		var currenthash = $(this).attr("href");
		$(".page").slideUp(300).delay(600);
		window.location = currenthash;
		$(".navbutton").removeClass("disabled");
		if ($(this).hasClass("navbutton")) {
			$(this).addClass("disabled");
		}
    $(currenthash).slideDown(800).delay(400);			
	}
}
