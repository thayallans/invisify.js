const { characterToInvisify, invisifyToCharacter } = require('./utils/conversion');

/**
 * Converts string into invisible characters by converting to Invisify Standards
 * @param {string} text - The value to invisify
 * @return {string}
 */
const stringToInvisify = (text, options = {}) => {
    let total_result = ''
    for (var text_index = 0; text_index < text.length; text_index++) {
        total_result = total_result + characterToInvisify(text[text_index].toUpperCase());   
    }
    return total_result;
}

/**
 * Converts invisible characters to string by converting to Invisify Standards
 * @param {string} text - The value to invisify
 * @return {string}
 */
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

module.exports.stringToInvisify = stringToInvisify;
module.exports.invisifyToString = invisifyToString;
