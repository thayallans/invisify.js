const semiVisible = false;
const character1 = semiVisible ? '\u0300' : '\u200B';
const character2 = semiVisible ? '\u0301' : '\u200C';
const character3 = semiVisible ? '\u0302' : '\u200D';
const character4 = semiVisible ? '\u0303' : '\u200E';
const character5 = semiVisible ? '\u0304' : '\u200F';


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
    '.' : character2 + character2 + character2,
    'a' : character2 + character2 + character3,
    'b' : character2 + character2 + character4,
    'c' : character2 + character2 + character5,
    'd' : character2 + character3 + character1,
    'e' : character2 + character3 + character2,
    'f' : character2 + character3 + character3,
    'g' : character2 + character3 + character4,
    'h' : character2 + character3 + character5,
    'i' : character2 + character4 + character1,
    'j' : character2 + character4 + character2,
    'k' : character2 + character4 + character3,
    'l' : character2 + character4 + character4,
    'm' : character2 + character4 + character5,
    'n' : character2 + character5 + character1,
    'o' : character2 + character5 + character2,
    'p' : character2 + character5 + character3,
    'q' : character2 + character5 + character4,
    'r' : character2 + character5 + character5,
    's' : character3 + character1 + character1,
    't' : character3 + character1 + character2,
    'u' : character3 + character1 + character3,
    'v' : character3 + character1 + character4,
    'w' : character3 + character1 + character5,
    'x' : character3 + character2 + character1,
    'y' : character3 + character2 + character2,
    'z' : character3 + character2 + character3,
    '0' : character3 + character2 + character4,
    '1' : character3 + character2 + character5,
    '2' : character3 + character3 + character1,
    '3' : character3 + character3 + character2,
    '4' : character3 + character3 + character3,
    '5' : character3 + character3 + character4,
    '6' : character3 + character3 + character5,
    '7' : character3 + character4 + character1,
    '8' : character3 + character4 + character2,
    '9' : character3 + character4 + character3,
    '-' : character3 + character4 + character4,
    '_' : character3 + character4 + character5,
    '~' : character3 + character5 + character1,
    '#' : character3 + character5 + character2,
    '[' : character3 + character5 + character3,
    ']' : character3 + character5 + character4,
    '@' : character3 + character5 + character5,
    '!' : character4 + character1 + character1,
    '$' : character4 + character1 + character2,
    '\'' : character4 + character1 + character3,
    '(' : character4 + character1 + character4,
    ')' : character4 + character1 + character5,
    '*' : character4 + character2 + character1,
    '+' : character4 + character2 + character2,
    ',' : character4 + character2 + character3,
    ';' : character4 + character2 + character4,
}


const characterToInvisify = (character) => {
    return alpha_to_invisible[character];
}

const invisifyToCharacter = (main_string) => {
    const comparing_string = decodeURIComponent(main_string);
    let returning_character = '';
    Object.keys(alpha_to_invisible).forEach(character => {
        let first_char = alpha_to_invisible[character].charCodeAt(0) == comparing_string.charCodeAt(0);
        let second_char = alpha_to_invisible[character].charCodeAt(1) == comparing_string.charCodeAt(1);
        let third_char = alpha_to_invisible[character].charCodeAt(2) == comparing_string.charCodeAt(2);
        if (first_char && second_char && third_char) {
            returning_character = character;
        }
    });
    return returning_character;
}

module.exports.characterToInvisify = characterToInvisify;
module.exports.invisifyToCharacter = invisifyToCharacter
