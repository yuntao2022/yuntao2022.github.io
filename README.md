# Yuntao Lu — Personal Academic Homepage

An original, buildless academic homepage written in HTML, CSS, and JavaScript.

## Preview on your Mac

1. On the repository page, select **Code → Download ZIP** and unzip it, or clone it with GitHub Desktop.
2. Double-click `index.html` to open the homepage in your browser. No installation, account, build, or server is required.
3. Edit the files in VS Code or another text editor and refresh the browser to see changes.

Optional: from the downloaded project folder, run `python3 -m http.server 8000 --bind 127.0.0.1` and open `http://127.0.0.1:8000`. Press Control-C to stop the server. The binding keeps this preview on your own computer.

## Edit your content

| File | Purpose |
| --- | --- |
| `index.html` | Biography, research topics, talks, news, contact information, and links |
| `styles.css` | Colors, fonts, spacing, two-column layout, mobile layout, and print layout |
| `script.js` | Current-year footer enhancement; the site works without it |
| `.nojekyll` | Tells GitHub Pages to serve these static files directly |

### Add your photograph

Place a photo at `assets/portrait.jpg`. In `index.html`, change the portrait image source from `assets/portrait.svg` to `assets/portrait.jpg` and change its alt text to `Portrait of Yuntao Lu`. A square photograph works best.

### Add your CV

Create `assets/files/`, upload your actual CV as `cv.pdf`, and uncomment the CV anchor in the `profile-links` block in `index.html`. The link is deliberately absent until the file exists. Add Google Scholar, ORCID, and other profiles only after checking their exact URLs.

To adjust the main palette, change `--paper`, `--ink`, and `--bar` in `styles.css`. To adjust column widths and spacing, edit `.page` and its responsive rules.

## Publish later with the free GitHub Pages address

Only follow these steps when you intentionally want the site to be public:

1. Review the content and repository history, and replace any remaining draft content.
2. With GitHub Free, the Pages source repository must be public. In repository **Settings → General → Danger Zone → Change repository visibility**, change it to **Public** when you are ready. GitHub's confirmation dialog describes the consequences. A paid plan that supports private Pages source repositories can keep source private, but that alone does not make the published website private.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Choose **main**, choose **/ (root)**, and click **Save**.
6. Leave **Custom domain** empty to use the free GitHub address.
7. Wait for the deployment to succeed; then visit **https://yuntao2022.github.io/**. Publication can take up to ten minutes.
8. Keep **Enforce HTTPS** enabled where available. Check the site on desktop and mobile, and test all links.


## Credits and ownership

Code was written from scratch with the help of GPT-6.1 Sol. The color scheme and layout were inspired by [Chris Camaño's homepage](https://www.chriscamano.com/).
