fetch('/nav.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
    highlightCurrentNavLink();
  });

function highlightCurrentNavLink() {
  // Current page filename; treat "/" and "" as index.html
  var page = window.location.pathname.split('/').pop();
  if (!page) page = 'index.html';

  var links = document.querySelectorAll('.nav-links a');
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.classList.contains('ext')) continue;
    var target = link.getAttribute('href').split('/').pop();
    if (target === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  }
}
