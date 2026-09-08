# Catherine M. Bain — academic website

A static site (plain HTML + CSS, no build step) for GitHub Pages.
Dark jewel-tone design built on the CARAT palette, with a custom
faceted-gem motif.

## Pages

```
index.html          Home: hero, about, news, selected work, CARAT band
research.html       Research program (four lines of work)
publications.html   Full categorized publication list
teaching.html       Teaching, awards, service
lab.html            The CARAT lab: mission, the acronym, themes, join
css/style.css       All styling + the palette (edit colors here)
js/main.js          Mobile nav toggle
assets/             headshot.jpg, carat-logo.png, Bain_CV.pdf, favicon.svg
.nojekyll           Serve files as-is (no Jekyll processing)
```

## Palette (top of css/style.css, under `:root`)

Rose `#EFA9B4` / `#E49CA8` · Teal `#8FCAD6` / `#84B4C0` ·
Background `#0F1C1E` · Surface `#16292B` · Text `#EAF2F1`.
Change a value once and it updates site-wide.

## Editing content

Open any `.html` in a text editor; content is plain HTML.

- **Add a news item** (index.html, `<ul class="news">`): copy one
  `<li>...</li>`, change the `<span class="when">` date and the text.
- **Add a publication** (publications.html): copy a `<div class="pub">`
  block into the right group and edit the text. Add `<span class="badge">`
  for "Under review" / "In press" flags.
- **Underline a mentored undergraduate** (publications.html): wrap the
  name in `<u>...</u>`, e.g. `<u>Conley, A.</u>`.
- **Swap the CV**: replace `assets/Bain_CV.pdf` with a newer file of the
  same name; every link keeps working.
- **Google Scholar link**: the footer links to a placeholder
  `https://scholar.google.com/`. Replace it with your profile URL in all
  five HTML files (search for `scholar.google.com`).

Preview locally: open `index.html` in a browser, or run
`python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a public repo named `cbain1.github.io` (your username + `.github.io`).
2. Upload the *contents* of this folder (so `index.html` is at the repo root).
3. Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)` → Save.
4. Visit `https://cbain1.github.io` after a minute or two.

## Custom domain (optional)

If you own a domain (e.g. `catherinebain.com`):

1. Settings → Pages → **Custom domain** → type your domain → Save.
   GitHub creates a `CNAME` file in the repo for you.
2. At your domain registrar's DNS settings, add records:
   - For an apex domain (`catherinebain.com`), four **A** records pointing to
     GitHub's Pages IPs: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
     (verify the current values in GitHub's Pages documentation).
   - For a `www` subdomain, one **CNAME** record pointing to
     `cbain1.github.io`.
3. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate
   is issued (can take up to a day).

Do not add a `CNAME` file by hand unless you own the domain; an incorrect
one will break the default `cbain1.github.io` URL.
