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

import imgEasy from '../images/T_cm_b1_easy.jpg'
import imgLinn from '../images/T_cm_b2_linn.jpg'
import imgBaby from '../images/T_cm_b3_baby.jpg'
import imgBottle from '../images/T_cm_b4_bottle.jpg'

import imgLogoEasy from '../images/in-game/T_ig_logo_b1_easy.png'
import imgLogoLinn from '../images/in-game/T_ig_logo_b2_linn.png'
import imgLogoBaby from '../images/in-game/T_ig_logo_b3_baby.png'
import imgLogoBottle from '../images/in-game/T_ig_logo_b4_bottle.png'

import sketchEasy from '../images/T_cm_b1_illu_easy.svg'
import sketchLinn from '../images/T_cm_b2_illu_linn.svg'
import sketchBaby from '../images/T_cm_b3_illu_baby.svg'
import sketchBottle from '../images/T_cm_b4_illu_bottle.svg'

import event1jung from '../images/in-game/T_e1_jung.svg'
import event2ride from '../images/in-game/T_e2_ride.svg'
import event3cruise from '../images/in-game/T_e3_cruise.svg'
import event4backseat from '../images/in-game/T_e4_backseat.svg'
import event5wodka from '../images/in-game/T_e5_wodka.svg'
import event6molotow from '../images/in-game/T_e6_molotow.svg'
import event7pooca from '../images/in-game/T_e7_pooca.svg'

import audioBaby from '../audio/CharSel/Baby Jesus - Choose a band.m4a'
import audioEasy from '../audio/CharSel/Easy October - Choose a band.m4a'
import audioLinn from '../audio/CharSel/Linn Koch Emmery - Choose a band.m4a'
import audioBottle from '../audio/CharSel/Bottlecap - Choose a band.m4a'

import audioE1 from '../audio/events/audioE1.m4a'
import audioE2 from '../audio/events/Backseat Ride Bicycle.wav'
import audioE3 from '../audio/events/Cruise Liner Final.m4a'
import audioE4 from '../audio/events/Backseat Showcase.m4a'
import audioE5 from '../audio/events/Wodka Bombe.mp3'
import audioE6 from '../audio/events/Molotow Westside Story.m4a'
import audioE7 from '../audio/events/Ende Finaler Sound Timetable Pooca Bar.m4a'

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
<<<<<<< HEAD
    sequence: [countDown1, countDown2, countDown3, countDown4],
    image: null,
=======
>>>>>>> master
  },
  tiles: [
    { position: { x: xStart + 2, y: yStart + 5 }, event: null },
    { position: { x: xStart + 9, y: yStart + 3 }, event: null },
    { position: { x: xStart + 16, y: yStart + 2 }, event: null },
    { position: { x: xStart + 21, y: yStart + 8 }, event: null },
    { position: { x: xStart + 26, y: yStart + 14 }, event: null },
    {
      position: { x: xStart + 30, y: yStart + 22 },
      event: event1jung,
      audio: audioE1,
    },
    { position: { x: xStart + 23, y: yStart + 23 }, event: null },
    { position: { x: xStart + 16, y: yStart + 23 }, event: null },
    { position: { x: xStart + 9, y: yStart + 25 }, event: null },
    { position: { x: xStart + 7, y: yStart + 32 }, event: null },
    {
      position: { x: xStart + 6, y: yStart + 39 },
      event: event2ride,
      audio: audioE2,
    },
    { position: { x: xStart + 5, y: yStart + 47 }, event: null },
    { position: { x: xStart + 6, y: yStart + 55 }, event: null },
    { position: { x: xStart + 14, y: yStart + 59 }, event: null },
    { position: { x: xStart + 22, y: yStart + 58 }, event: null },
    {
      position: { x: xStart + 30, y: yStart + 56 },
      event: event3cruise,
      audio: audioE3,
    },
    { position: { x: xStart + 37, y: yStart + 54 }, event: null },
    { position: { x: xStart + 44, y: yStart + 52 }, event: null },
    { position: { x: xStart + 50, y: yStart + 47 }, event: null },
    {
      position: { x: xStart + 48, y: yStart + 40 },
      event: event4backseat,
      audio: audioE4,
    },
    { position: { x: xStart + 45, y: yStart + 33 }, event: null },
    { position: { x: xStart + 45, y: yStart + 25 }, event: null },
    {
      position: { x: xStart + 51.5, y: yStart + 23 },
      event: event5wodka,
      audio: audioE5,
    },
    { position: { x: xStart + 50, y: yStart + 16 }, event: null },
    {
      position: { x: xStart + 46, y: yStart + 10 },
      event: event6molotow,
      audio: audioE6,
    },
    { position: { x: xStart + 42, y: yStart + 4 }, event: null },
    {
      position: { x: xStart + 43, y: yStart - 3 },
      event: event7pooca,
      audio: audioE7,
    },
  ],
  bands: [
    {
      name: 'Easy',
      picture: imgEasy,
      charSketch: sketchEasy,
      gameImg: imgLogoEasy,
      audio: audioEasy,
    },
    {
      name: 'Linn',
      picture: imgLinn,
      charSketch: sketchLinn,
      gameImg: imgLogoLinn,
      audio: audioLinn,
    },
    {
      name: 'Baby',
      picture: imgBaby,
      charSketch: sketchBaby,
      gameImg: imgLogoBaby,
      audio: audioBaby,
    },
    {
      name: 'Bottle',
      picture: imgBottle,
      charSketch: sketchBottle,
      gameImg: imgLogoBottle,
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
