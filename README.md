# Chess.com Front End Programming Challenge

Vue 3 + SCSS implementation of the Chess.com / ChessKid front-end programming challenge.

## Requirements covered

- Page contains a chessboard and sidebar
- Sidebar appears to the right of the board on desktop
- Sidebar appears below the board on mobile
- Chessboard resizes within available viewport space
- Chessboard remains fully visible with a minimum size of 264x264px
- Clicking a square highlights it
- Multiple squares can be highlighted at the same time
- Sidebar logs clicked squares in click order
- Clicking an already highlighted square removes the highlight without changing the sidebar log
- Re-highlighting a square adds a new log entry
- Unit tests are included

## Tech stack

- Vue 3
- Vite
- SCSS
- Vitest
- Testing Library

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Run tests

```bash
npm run test:run
```

## Build

```bash
npm run build
```

## Notes

The board is generated from file/rank arrays and uses semantic button elements for each square. Highlighted state is stored separately from the clicked-square log to satisfy the requirement that un-highlighting a square should not modify the sidebar log.
