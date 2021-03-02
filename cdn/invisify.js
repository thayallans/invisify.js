const stringToInvisify = (text, options = {}) => {
    let total_result = ''
    for (var text_index = 0; text_index < text.length; text_index++) {
        total_result = total_result + characterToInvisify(text[text_index].toUpperCase());   
    }
    return total_result;
}

const invisifyToString = (text, options = {}) => {
    let total_result = ''
    let every18Chars = '';
    for (let char_index = 0; char_index < text.length; char_index++) {
        every18Chars = every18Chars + text[char_index];
        if (every18Chars.length == 18) {
            let x = invisifyToCharacter(every18Chars)
            total_result = total_result + x;
            every18Chars = '';
        }
    }
    return total_result;
}
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
    '.' : character2 + character2 + character1,
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
