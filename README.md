# TEN DOORS

Fast, static, vanilla HTML/CSS/JS birthday experience.

## Permanent assets
Put the supplied files here before deployment:
- `assets/gadha.png` — the real Gadha image.
- `assets/day1.mp3` — extracted from `day 1.mp4`.
- `assets/radio_show.mp3` — Door 08 podcast audio (if supplied).

These files are referenced by normal website URLs (`assets/...`) and are therefore part of the deployed site. They do NOT depend on localStorage or IndexedDB.

## Important storage rule
IndexedDB is used only for visitor-added Door 09 gallery data. It is browser/device-specific by design. It cannot replace bundled assets.

## Speed choices
- Vanilla JS, no framework/runtime.
- One CSS file and one JS file.
- Deferred JavaScript.
- No autoplay audio.
- Minimal animations.
- Gallery added by visitors is loaded on demand.
- No heavy particle library.
- `preload="metadata"` for audio.

## Run
Open with VS Code Live Server (recommended), or any static server.

## Launch
Change `TESTING_MODE` in `app.js` from `true` to `false` when you want the date locks active.

## Permanent asset warning
Do not put the original assets only into browser storage. Keep them in `/assets` and deploy that folder with the website.
