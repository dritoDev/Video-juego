/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
  '-': ' ',
  'O': '🚪',
  'X': '💣',
  'I': '🎁',
  'PLAYER': '💀',
  'BOMB_COLLISION': '🔥',
  'GAME_OVER': '👎',
  'WIN': '🏆',
  'HEART': '❤️',
};

const maps = [];
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  XX--XX--XX
  XX--XXX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);

maps.push(`
  O-XXXXXXXX
  X-----X--X
  X--XXX---X
  X------XXX
  XXX---XXXX
  X----XXXXX
  X--XXXXXXX
  X----XXXXX
  XXXX--XXXX
  XXXX---IXX
`);

// Agrega más mapas aquí...

// Ejemplo de un mapa adicional:
maps.push(`
  X--X-----I
  X--XX----X
  XX-----XXX
  X----X-X-X
  X-------XX
  X--X-X-X-X
  XX-----XXX
  XXXXXX--XX
  X-----X--X
  XX----X--I
`);

// Agrega tantos mapas como desees...

// No olvides ajustar el número de mapas en otras partes del código si agregas más.

