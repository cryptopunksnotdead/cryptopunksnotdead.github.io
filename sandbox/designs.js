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