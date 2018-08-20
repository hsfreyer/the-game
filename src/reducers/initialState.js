const xStart = 21
const yStart = 20

export default {
  player: {
    tile: null,
    position: { x: 11, y: 11 },
    band: null,
    pawn: null
  },
  tilePositions: [
    { x: xStart + 2, y: yStart + 5 },
    { x: xStart + 9, y: yStart + 3 },
    { x: xStart + 16, y: yStart + 2 },
    { x: xStart + 21, y: yStart + 8 },
    { x: xStart + 26, y: yStart + 14 },
    { x: xStart + 30, y: yStart + 22 },
    { x: xStart + 23, y: yStart + 23 },
    { x: xStart + 16, y: yStart + 23 },
    { x: xStart + 9, y: yStart + 25 },
    { x: xStart + 7, y: yStart + 32 },
    { x: xStart + 6, y: yStart + 39 },
    { x: xStart + 5, y: yStart + 47 },
    { x: xStart + 6, y: yStart + 55 },
    { x: xStart + 14, y: yStart + 59 },
    { x: xStart + 22, y: yStart + 58 },
    { x: xStart + 30, y: yStart + 56 },
    { x: xStart + 37, y: yStart + 54 },
    { x: xStart + 44, y: yStart + 52 },
    { x: xStart + 50, y: yStart + 47 },
    { x: xStart + 48, y: yStart + 40 },
    { x: xStart + 45, y: yStart + 33 },
    { x: xStart + 45, y: yStart + 25 },
    { x: xStart + 51.5, y: yStart + 23 },
    { x: xStart + 50, y: yStart + 16 },
    { x: xStart + 46, y: yStart + 10 },
    { x: xStart + 42, y: yStart + 4 },
    { x: xStart + 43, y: yStart - 3 }
  ],
  bands: {
    babyJesus: { charImg: null, gameImg: null }
  },
  dice: {
    standard: null,
    roll: null,
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null
  }
}
