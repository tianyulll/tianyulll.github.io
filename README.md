# Tianyu Lu — computational portfolio

Bilingual Jekyll portfolio for GitHub Pages.

## Preview

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. Build with `bundle exec jekyll build`.

## Editing

- `_data/portfolio.json`: English and Chinese biography, experience, education, and skills.
- `_data/projects.json`: shared project records with English and Chinese descriptions. Keep workflow designs distinct from implemented work.
- `_includes/profile.html`, `projects.html`, `cv.html`: shared page templates.
- `index.md`, `projects/index.html`, `tianyulu.md`: English page metadata.
- `zh/`: Chinese page metadata and translated article.
- `assets/styles.css`: layout and responsive styles.

Each paired page declares `en_url` and `zh_url` for navigation and language metadata. Illustrations are decorative, not experimental data. Generated `_site/` files should not be committed.
