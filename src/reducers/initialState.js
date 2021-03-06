import imgTileStandard from '../images/in-game/T_ig_tile_standard.svg'
import imgTileEvent from '../images/in-game/T_ig_tile_press.svg'
// import imgTileHighlight from '../images/in-game/T_ig_tile_highlight.svg'

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
import countDownRnR from '../images/in-game/T_countdown_04.svg'

import imgEasy from '../images/char-sel/T_cm_b1_easy.jpg'
import imgLinn from '../images/char-sel/T_cm_b2_linn.jpg'
import imgBaby from '../images/char-sel/T_cm_b3_baby.jpg'
import imgBottle from '../images/char-sel/T_cm_b4_bottle.jpg'

import imgLogoEasy from '../images/in-game/T_ig_logo_b1_easy.png'
import imgLogoLinn from '../images/in-game/T_ig_logo_b2_linn.png'
import imgLogoBaby from '../images/in-game/T_ig_logo_b3_baby.png'
import imgLogoBottle from '../images/in-game/T_ig_logo_b4_bottle.png'

import sketchEasy from '../images/char-sel/T_cm_b1_illu_easy.svg'
import sketchLinn from '../images/char-sel/T_cm_b2_illu_linn.svg'
import sketchBaby from '../images/char-sel/T_cm_b3_illu_baby.svg'
import sketchBottle from '../images/char-sel/T_cm_b4_illu_bottle.svg'

import pawnEasy from '../images/in-game/T_token_b1_easy.svg'
import pawnLinn from '../images/in-game/T_token_b2_linn.svg'
import pawnBaby from '../images/in-game/T_token_b3_baby.svg'
import pawnBottle from '../images/in-game/T_token_b4_bottle.svg'

import event1jung from '../images/in-game/T_e1_jung.png'
import event2ride from '../images/in-game/T_e2_ride.png'
import event3cruise from '../images/in-game/T_e3_cruise.png'
import event4backseat from '../images/in-game/T_e4_backseat.png'
import event5wodka from '../images/in-game/T_e5_wodka.png'
import event6molotow from '../images/in-game/T_e6_molotow.png'
// import event7pooca from '../images/in-game/T_e7_pooca.png'

import audioBaby from '../audio/CharSel/Baby Jesus - Choose a band.m4a'
import audioEasy from '../audio/CharSel/Easy October - Choose a band.m4a'
import audioLinn from '../audio/CharSel/Linn Koch Emmery - Choose a band.m4a'
import audioBottle from '../audio/CharSel/Bottlecap - Choose a band.m4a'

import songBaby from '../audio/in-game/baby_in-game.mp3'
import songBottle from '../audio/in-game/bottle_in-game.mp3'
import songEasy from '../audio/in-game/easy_in-game.mp3'
import songLinn from '../audio/in-game/linn_in-game.mp3'

import audioE1 from '../audio/events/audioE1.m4a'
import audioE2 from '../audio/events/Backseat Ride Bicycle.mp3'
import audioE3 from '../audio/events/Cruise Liner Final.m4a'
import audioE4 from '../audio/events/Backseat Showcase.m4a'
import audioE5 from '../audio/events/Wodka Bombe Level Up.m4a'
import audioE6 from '../audio/events/Molotow Westside Story.mp3'

import aDice from '../images/in-game/arrow_dice.png'
import aDrinks from '../images/in-game/arrow_drinks.png'
import aLevel from '../images/in-game/arrow_level.png'
import aMolotow from '../images/in-game/arrow_molotow.png'
import aPooca from '../images/in-game/arrow_pooca.png'
import aRide from '../images/in-game/arrow_ride.png'
import aShow from '../images/in-game/arrow_show.png'
import aSun from '../images/in-game/arrow_sun.png'

const xStart = 21
const yStart = 20

export default {
  isClickBlocked: false,
  isEvent: false,
  player: {
    tile: 0,
    band: {
      name: 'Easy',
      picture: imgEasy,
      charSketch: sketchEasy,
      gameImg: imgLogoEasy,
      audio: audioEasy,
      pawn: pawnEasy
    },
    roll: null,
    pawn: null
  },
  countDown: {
    sequence: [countDown3, countDown2, countDown1, countDownRnR, ''],
    image: null
  },
  tiles: [
    {
      position: { x: 11, y: 11 },
      img: null,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 2, y: yStart + 5 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 9, y: yStart + 3 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 16, y: yStart + 2 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 21, y: yStart + 8 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 26, y: yStart + 14 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 30, y: yStart + 22 },
      img: imgTileEvent,
      event: event1jung,
      audio: audioE1,
      newTile: 3
    },
    {
      position: { x: xStart + 23, y: yStart + 23 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 16, y: yStart + 23 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 9, y: yStart + 25 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 7, y: yStart + 32 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 6, y: yStart + 39 },
      img: imgTileEvent,
      event: event2ride,
      audio: audioE2,
      newposition: { x: xStart + 14, y: yStart + 59 },
      newTile: 14
    },
    {
      position: { x: xStart + 5, y: yStart + 47 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 6, y: yStart + 55 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 14, y: yStart + 59 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 22, y: yStart + 58 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 30, y: yStart + 56 },
      img: imgTileEvent,
      event: event3cruise,
      audio: audioE3,
      newposition: { x: xStart + 2, y: yStart + 5 },
      newTile: 13
    },
    {
      position: { x: xStart + 37, y: yStart + 54 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 44, y: yStart + 52 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 50, y: yStart + 47 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 48, y: yStart + 40 },
      img: imgTileEvent,
      event: event4backseat,
      audio: audioE4,
      newTile: 24
    },
    {
      position: { x: xStart + 45, y: yStart + 33 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 45, y: yStart + 25 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 51.5, y: yStart + 23 },
      img: imgTileEvent,
      event: event5wodka,
      audio: audioE5,
      newTile: 26
    },
    {
      position: { x: xStart + 50, y: yStart + 16 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 46, y: yStart + 10 },
      img: imgTileEvent,
      event: event6molotow,
      audio: audioE6,
      newTile: 21
    },
    {
      position: { x: xStart + 42, y: yStart + 4 },
      img: imgTileStandard,
      event: null,
      audio: null
    },
    {
      position: { x: xStart + 43, y: yStart - 3 },
      img: imgTileEvent,
      event: 'final',
      audio: null,
      newTile: 0
    }
  ],
  bands: [
    {
      name: 'easy',
      charPicture: imgEasy,
      charSketch: sketchEasy,
      gameImg: imgLogoEasy,
      audio: audioEasy,
      song: songEasy,
      pawn: pawnEasy
    },
    {
      name: 'linn',
      charPicture: imgLinn,
      charSketch: sketchLinn,
      gameImg: imgLogoLinn,
      audio: audioLinn,
      song: songLinn,

      pawn: pawnLinn
    },
    {
      name: 'baby',
      charPicture: imgBaby,
      charSketch: sketchBaby,
      gameImg: imgLogoBaby,
      audio: audioBaby,
      song: songBaby,

      pawn: pawnBaby
    },
    {
      name: 'bottle',
      charPicture: imgBottle,
      charSketch: sketchBottle,
      gameImg: imgLogoBottle,
      audio: audioBottle,
      song: songBottle,
      pawn: pawnBottle
    }
  ],
  dice: {
    active: {
      imgDice: imgDice6,
      imgResult: null,
      imgHighlight: false,
      rollAnimation: false
    },
    result: [
      { imgDice: null, imgResult: null },
      { imgDice: imgDice1, imgResult: imgResult1 },
      { imgDice: imgDice2, imgResult: imgResult2 },
      { imgDice: imgDice3, imgResult: imgResult3 },
      { imgDice: imgDice4, imgResult: imgResult4 },
      { imgDice: imgDice5, imgResult: imgResult5 },
      { imgDice: imgDice6, imgResult: imgResult6 }
    ]
  },
  selectedCharacter: null,
  gameScreenPics: [
    {
      img: aDice,
      position: { x: 85, y: 39 },
      size: 12
    },
    {
      img: aDrinks,
      position: { x: 48, y: 48 },
      size: 7
    },
    {
      img: aRide,
      position: { x: 33, y: 60 },
      size: 6
    },
    {
      img: aSun,
      position: { x: 45, y: 66 },
      size: 8
    },
    {
      img: aShow,
      position: { x: 57, y: 60 },
      size: 13
    },
    {
      img: aLevel,
      position: { x: 78, y: 45 },
      size: 6
    },
    {
      img: aMolotow,
      position: { x: 60, y: 32 },
      size: 9
    },
    {
      img: aPooca,
      position: { x: 62, y: 8 },
      size: 9
    }
  ]
}
