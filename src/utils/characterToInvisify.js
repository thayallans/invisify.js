

const character1 = '\u200B';
const character2 = '\u200C';
const character3 = '\u200D';
const character4 = '\u200E';
const character5 = '\u200F';


const alpha_to_invisible = {
    'A' : character1 + character1 + character1,
    'B' : character1 + character1 + character2,
    'C' : character1 + character1 + character3,
    'D' : character1 + character1 + character4,
    'E' : character1 + character1 + character5,
    'F' : character1 + character2 + character1,
    'G' : character1 + character2 + character2,
    'H' : character1 + character2 + character3,
    'I' : character1 + character2 + character4,
    'J' : character1 + character2 + character5,
    'K' : character1 + character3 + character1,
    'L' : character1 + character3 + character2,
    'M' : character1 + character3 + character3,
    'N' : character1 + character3 + character4,
    'O' : character1 + character3 + character5,
    'P' : character1 + character4 + character1,
    'Q' : character1 + character4 + character2,
    'R' : character1 + character4 + character3,
    'S' : character1 + character4 + character4,
    'T' : character1 + character4 + character5,
    'U' : character1 + character5 + character1,
    'V' : character1 + character5 + character2,
    'W' : character1 + character5 + character3,
    'X' : character1 + character5 + character4,
    'Y' : character1 + character5 + character5,
    'Z' : character2 + character1 + character1,
    ':' : character2 + character1 + character2,
    '/' : character2 + character1 + character3,
    '?' : character2 + character1 + character4,
    '=' : character2 + character1 + character5,
    '&' : character2 + character2 + character1,
    '.' : character2 + character2 + character1,
}


const characterToInvisify = (character) => {
    return alpha_to_invisible[character];
}

module.exports.characterToInvisify = characterToInvisify;
