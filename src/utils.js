export function get(sel) {
  return document.querySelector(sel)
}

export function singleDice(max) {
  return Math.floor(Math.random() * max) + 1
}
