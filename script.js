var scrollingElement = (document.scrollingElement || document.body);

function addContent() {
  $('.content').append("<p>This is some nice content don't ya think?</p> <br>");
}

function clearContent() {
  $('.content').empty();
}
