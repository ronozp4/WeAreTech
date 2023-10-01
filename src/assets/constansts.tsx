
//API
const BASE_URL = 'http://3.73.116.126:3000/api/sounds/category'
const endpoints = {
    getDrumSound: '/Darbuka',
};

const ColorPalette = {
    padGreen: '#5bff53',
    padRed: '#ff2b2b',
    padBlue: '#3636ff',
    padLightBlue: '#0bb2f4ff',
    padPurple: '#cb21ff',
    padPink: '#ff60ef',
    padYellow: '#ffff4a',
    padOrange: '#ff9633',
    defaultColor: '#1d1d20ff',
}

const COLORS = [ '#5bff53','#ff2b2b', '#3636ff', '#0bb2f4ff',  '#cb21ff', '#ff60ef', '#ffff4a', '#ff9633', '#1d1d20ff' ]

export {
    endpoints,
    BASE_URL,
    COLORS,
    ColorPalette
  }