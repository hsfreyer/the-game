import imgDiceActive from '../images/in-game/T_dice_06.svg'
import imgDiceRoll from '../images/in-game/T_dice_mix.svg'
import imgDice1 from '../images/in-game/T_dice_01.svg'
import imgDice2 from '../images/in-game/T_dice_02.svg'
import imgDice3 from '../images/in-game/T_dice_03.svg'
import imgDice4 from '../images/in-game/T_dice_04.svg'
import imgDice5 from '../images/in-game/T_dice_05.svg'
import imgDice6 from '../images/in-game/T_dice_06.svg'

import imgResult1 from '../images/in-game/T_dice_num_01.svg'
import imgResult2 from '../images/in-game/T_dice_num_02.svg'
import imgResult3 from '../images/in-game/T_dice_num_03.svg'
import imgResult4 from '../images/in-game/T_dice_num_04.svg'
import imgResult5 from '../images/in-game/T_dice_num_05.svg'
import imgResult6 from '../images/in-game/T_dice_num_06.svg'

import countDown1 from '../images/in-game/T_countdown_01.svg'
import countDown2 from '../images/in-game/T_countdown_02.svg'
import countDown3 from '../images/in-game/T_countdown_03.svg'
import countDown4 from '../images/in-game/T_countdown_04.svg'

import imgEasy from '../images/T_cm_b1_easy.png'
import imgLinn from '../images/T_cm_b2_linn.png'
import imgBaby from '../images/T_cm_b3_baby.png'
import imgBottle from '../images/T_cm_b4_bottle.png'

import sketchEasy from '../images/T_cm_b1_illu_easy.svg'
import sketchLinn from '../images/T_cm_b2_illu_linn.svg'
import sketchBaby from '../images/T_cm_b3_illu_baby.svg'
import sketchBottle from '../images/T_cm_b4_illu_bottle.svg'

import audioBaby from '../audio/CharSel/Baby Jesus - Choose a band.m4a'
import audioEasy from '../audio/CharSel/Easy October - Choose a band.m4a'
import audioLinn from '../audio/CharSel/Linn Koch Emmery - Choose a band.m4a'
import audioBottle from '../audio/CharSel/Bottlecap - Choose a band.m4a'

const xStart = 21
const yStart = 20

export default {
  player: {
    tile: null,
    position: { x: 11, y: 11 },
    band: null,
    pawn: null,
    roll: null,
  },
  countDown: {
    sequence: [countDown1, countDown2, countDown3, countDown4],
    image: null,
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
    { x: xStart + 43, y: yStart - 3 },
  ],
  bands: [
    {
      name: 'Easy',
      picture: imgEasy,
      charSketch: sketchEasy,
      gameImg: null,
      audio: audioEasy,
    },
    {
      name: 'Linn',
      picture: imgLinn,
      charSketch: sketchLinn,
      gameImg: null,
      audio: audioLinn,
    },
    {
      name: 'Baby',
      picture: imgBaby,
      charSketch: sketchBaby,
      gameImg: null,
      audio: audioBaby,
    },
    {
      name: 'Bottle',
      picture: imgBottle,
      charSketch: sketchBottle,
      gameImg: null,
      audio: audioBottle,
    },
  ],
  dice: {
    active: { imgDice: imgDiceActive, imgResult: null },
    result: [
      { imgDice: imgDiceRoll, imgResult: null },
      { imgDice: imgDice1, imgResult: imgResult1 },
      { imgDice: imgDice2, imgResult: imgResult2 },
      { imgDice: imgDice3, imgResult: imgResult3 },
      { imgDice: imgDice4, imgResult: imgResult4 },
      { imgDice: imgDice5, imgResult: imgResult5 },
      { imgDice: imgDice6, imgResult: imgResult6 },
    ],
  },
  selectedCharacter: null,
}
