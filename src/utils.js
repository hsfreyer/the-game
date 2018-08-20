export function get(sel) {
  return document.querySelector(sel)
}

export function singleDice() {
  return Math.floor(Math.random() * 6) + 1
}
