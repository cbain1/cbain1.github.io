// Mobile navigation toggle
// Uses event delegation on document instead of querying .nav-toggle/.nav-links
// directly, because the header is injected asynchronously (js/include-nav.js
// fetches nav.html) and often isn't in the DOM yet when DOMContentLoaded fires.
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    var links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
    return;
  }
  // close menu after tapping a nav link (mobile)
  var link = e.target.closest('.nav-links a');
  if (link) {
    var links = document.querySelector('.nav-links');
    if (links) links.classList.remove('open');
  }
});
