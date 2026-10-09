# TEN DOORS — Full Project Source

This bundle contains the complete HTML/CSS/JavaScript source for the TEN DOORS birthday experience, including all ten doors and Door 10: **The Stars Know** (interactive constellation, nine discoverable stars, locked final star, birthday reveal, and final letter).

Door 9 is the full-screen 17-photo memory experience. Every photo has its own caption and voice-note player; the last photo shows the Spotify playlist link.

## Run locally

1. Extract this folder.
2. Add your original media files to the `assets` folder (see `assets/MEDIA-CHECKLIST.txt`).
3. In `app.js`, replace `https://open.spotify.com/playlist/PASTE_YOUR_PLAYLIST_ID_HERE` with your real Spotify playlist URL.
4. Open `index.html` in a browser, or preferably run the folder using VS Code Live Server.

## Important about media

The uploaded source files did not include the actual photo/audio assets, so this source bundle cannot include those private media files. Keep your existing `assets` folder and copy its contents into this bundle, then add/rename the Door 9 photos and voice notes to the filenames listed in the checklist. Do not replace your real photos or recordings with empty placeholder files.

## Door 9 media names

- `photo1.jpg` through `photo17.jpg`
- `voice-note-01.mp3` through `voice-note-17.mp3`

Door 9 expects one image and one voice note per memory. The Spotify button appears on photo 17.

## Other media used by existing doors

- `day1.mp3` — Door 1 recording
- `gadha.png` — Door 6 game character
- `radio_show.mp3` — Door 8 podcast

## Deploy to your existing Vercel site

1. Back up your current project folder.
2. Copy `app.js` and `styles.css` from this bundle into the root of your existing `TEN-DOORS` project.
3. Keep your original `assets` files and add the Door 9 files listed above.
4. Test Door 1–10 locally, especially the Door 9 audio for each photo and Door 10 star unlocking.
5. From the project folder, run:

   ```bash
   git add app.js styles.css assets
   git commit -m "Update Door 9 gallery and finalize Door 10 Stars Know"
   git push
   ```

Vercel should redeploy from the connected GitHub repository.
