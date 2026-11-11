fetch('/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
    var yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();
  });
