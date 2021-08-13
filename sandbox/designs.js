///////////////////////////
// punk pixel art

    const alien_design = `
###
# alien (male) - basic - zero attributes
#
#  colors:
#   0 - transparent
#   1 - black
#
#  size: 24x24

. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . @ @ @ @ @ @ @ . . . . . . . . .
. . . . . . . @ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . @ @ ^ ^ x @ ^ ^ ^ x @ @ . . . . . . .
. . . . @ ^ o ^ ^ @ o ^ ^ ^ @ o @ . . . . . . .
. . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . @ @ ^ ^ ^ ^ ^ o ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ o ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ o ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ @ @ @ @ @ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . . .
. . . . . . @ ^ ^ ^ @ @ @ @ @ . . . . . . . . .
. . . . . . @ ^ ^ ^ @ . . . . . . . . . . . . .
. . . . . . @ ^ ^ ^ @ . . . . . . . . . . . . .
`;

  const alien = Pixelart.parse( alien_design, {
                                 colors: {
                                    '@':  '#000000',       // color 1 - black
                                    'x':  '#75bdbd',       // color 2 - base 3  (darkest)
                                    'o':  '#9be0e0',       // color 3 - base 2  (darker)
                                    '^':  '#c8fbfb',       // color 4 - base 1
                                  }} );


  const zombie_design = `
  ###
  # zombie (male) - basic - zero attributes
  #
  #  colors:
  #   0 - transparent
  #   1 - black
  #
  #  size: 24x24

  . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . . . . . . . . .
  . . . . . . . . @ @ @ @ @ @ @ . . . . . . . . .
  . . . . . . . @ o o o o o o o @ . . . . . . . .
  . . . . . . @ o o ~ o o o o o o @ . . . . . . .
  . . . . . . @ o ~ o o o o o o o @ . . . . . . .
  . . . . . . @ o o o o o o o o o @ . . . . . . .
  . . . . . . @ o o o o o o o o o @ . . . . . . .
  . . . . . . @ o o x x o o o x x @ . . . . . . .
  . . . . . @ o o o ^ @ o o o ^ @ @ . . . . . . .
  . . . . . @ o o o x o o o o x o @ . . . . . . .
  . . . . . @ @ o o o o o o o o o @ . . . . . . .
  . . . . . . @ o o o o o @ @ o o @ . . . . . . .
  . . . . . . @ o o o o o o o o o @ . . . . . . .
  . . . . . . @ o o o o o o o o o @ . . . . . . .
  . . . . . . @ o o o o @ @ @ o o @ . . . . . . .
  . . . . . . @ o o o o x o o o o @ . . . . . . .
  . . . . . . @ o o o o o o o o @ . . . . . . . .
  . . . . . . @ o o o @ @ @ @ @ . . . . . . . . .
  . . . . . . @ o o o @ . . . . . . . . . . . . .
  . . . . . . @ o o o @ . . . . . . . . . . . . .
`

const zombie = Pixelart.parse( zombie_design, {
  colors: {
    '@':  '#000000',       // color 1 - black
    'x':  '#5e7253',
    'o':  '#7da269',
    '^':  '#ff0000',
    '~':  '#9bbc88',
  }} );


  const demon_design = `
  ###
# demon (male) - basic - zero attributes
#
#  colors:
#   0 - transparent
#   1 - black
#
#  size: 24x24

. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . @ @ . . . . . @ @ . . . . . . . .
. . . . . . . @ ^ @ . . . @ ^ @ . . . . . . . .
. . . . . . . @ ^ @ @ @ @ @ ^ @ . . . . . . . .
. . . . . . . @ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ x x ^ ^ ^ x x @ . . . . . . .
. . . . . @ ^ ^ ^ @ o ^ ^ ^ @ o @ . . . . . . .
. . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . @ @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ @ @ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ @ @ @ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . . .
. . . . . . @ ^ ^ ^ @ @ @ @ @ . . . . . . . . .
. . . . . . @ ^ ^ ^ @ . . . . . . . . . . . . .
. . . . . . @ ^ ^ ^ @ . . . . . . . . . . . . .
`;

 const demon = Pixelart.parse( demon_design, {
                                colors: {
                                  '@':  '#000000',       // color 1 - black
                                  'x':  '#390102',       // color 2 - base 3  (darkest)
                                  'o':  '#630006',       // color 3 - base 2  (darker)
                                  '^':  '#850008',       // color 4 - base 1
                                }} );



const human_design = `
###
# human (male) - basic - zero attributes
#
#  colors:
#   0 - transparent
#   1 - black
#
#  size: 24x24

. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . @ @ @ @ @ @ @ . . . . . . . . .
. . . . . . . @ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . . .
. . . . . . @ ^ ^ ~ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ~ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ x x ^ ^ ^ x x @ . . . . . . .
. . . . . @ ^ ^ ^ @ o ^ ^ ^ @ o @ . . . . . . .
. . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . @ @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ @ @ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ @ @ @ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . .
. . . . . . @ ^ ^ ^ ^ ^ ^ ^ ^ @ . . . . . . . .
. . . . . . @ ^ ^ ^ @ @ @ @ @ . . . . . . . . .
. . . . . . @ ^ ^ ^ @ . . . . . . . . . . . . .
. . . . . . @ ^ ^ ^ @ . . . . . . . . . . . . .
`;



HUMAN_LIGHT_BASE1   = '#dbb180'   // rgb(219 177 128) - hsl( 32°  56%  68%)
HUMAN_LIGHT_BASE2   = '#d29d60'   // rgb(210 157  96) - hsl( 32°  56%  60%) - eyes
HUMAN_LIGHT_BASE3   = '#a66e2c'   // rgb(166 110  44) - hsl( 32°  58%  41%) - eyes
HUMAN_LIGHT_BASE4   = '#e7cba9'   // rgb(231 203 169) - hsl( 33°  56%  78%)
HUMAN_LIGHT_BASE5   = '#711010'   // rgb(113  16  16) - hsl(  0°  75%  25%) - mouth

HUMAN_DARKER_BASE1  = '#713f1d'   // rgb(113  63  29) - hsl( 24°  59%  28%)
HUMAN_DARKER_BASE2  = '#723709'   // rgb(114  55   9) - hsl( 26°  85%  24%) - eyes
HUMAN_DARKER_BASE3  = '#562600'   // rgb( 86  38   0) - hsl( 27° 100%  17%) - eyes
HUMAN_DARKER_BASE4  = '#8b532c'   // rgb(139  83  44) - hsl( 25°  52%  36%)
HUMAN_DARKER_BASE5  = '#4a1201'   // rgb( 74  18   1) - hsl( 14°  97%  15%) - mouth





const human_light = Pixelart.parse( human_design, {
  colors: {
    '@':  '#000000',       // color 1 - black
    'x':  HUMAN_LIGHT_BASE3,
    'o':  HUMAN_LIGHT_BASE2,
    '^':  HUMAN_LIGHT_BASE1,
    '~':  HUMAN_LIGHT_BASE4,
  }} );


const human_darker = Pixelart.parse( human_design, {
  colors: {
    '@':  '#000000',       // color 1 - black
    'x':  HUMAN_DARKER_BASE3,
    'o':  HUMAN_DARKER_BASE2,
    '^':  HUMAN_DARKER_BASE1,
    '~':  HUMAN_DARKER_BASE4,
  }} );




////////////////////////////////////
// some add-ons / attributes

const cap = Pixelart.parse( `
  . . @ @ @ @ @ @ @ . . . . .
  . @ @ @ @ @ @ x @ @ . . . .
  @ @ @ @ @ @ @ @ x @ . . . .
  @ @ @ @ @ @ @ @ @ @ @ @ @ .
  @ @ @ @ @ @ @ @ @ @ @ @ @ @`, {
    colors: {
      '@': '#8119b7',
     ' x': '#b261dc' },
    offset: [6,4]
   });


const knittedcap = Pixelart.parse( `
  . . . @ @ @ @ @ @ @ . . .
  . . @ o o o o o o o @ . .
  . @ o o o o o o o o o @ .
  @ x x x x x x x x x x x @
  @ x o x o x o x o x o x @`, {
    colors: {
      '@': '#000000',
      'x': '#933709',
      'o': '#CA4E11' },
     offset: [5,5],
  });



const headband = Pixelart.parse( `
    x x x x x x x x x
    @ @ @ @ @ @ @ @ @`, {
     colors: {
      '@': '#1A6ED5',
      'x': '#FFFFFF'
     },
     offset: [7,7]
    });


const lasereyes_design = `
  . . . . @ . . . . . @ . . . .
  . . . . @ . . . . . @ . . . .
  . . . @ x @ . . . @ x @ . . .
  @ x x x o x @ . @ x o x x x @
  . . . @ x @ . . . @ x @ . . .
  . . . . @ . . . . . @ . . . .
  . . . . @ . . . . . @ . . . .
  `;

const lasereyes = Pixelart.parse( lasereyes_design, {
    colors: {    // red-ish
      '@': '#FB1A06',
      'x': '#F85C0F',
      'o': '#FFDB3C',
     },
     offset: [5,8]
    });

const lasereyes_light = Pixelart.parse( lasereyes_design, {
    colors: {  // yellow-ish
      '@': '#E6D300',
      'x': '#FFF799',
      'o': '#FFFFFF',
     },
     offset: [5,8]
    });
