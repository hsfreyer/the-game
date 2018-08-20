const xStart = 25
const yStart = 25

export default {
  player: {
    tile: null,
    position: { x: 20, y: 20 },
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
    { x: xStart + 14, y: yStart + 59 }
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
