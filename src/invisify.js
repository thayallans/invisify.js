const { characterToInvisify, invisifyToCharacter } = require('./utils/conversion');

/**
 * Converts string into invisible characters by converting to Invisify Standards
 * @param {string} text - The value to invisify
 * @return {string}
 */
const stringToInvisify = (text, options = {}) => {
    let total_result = ''
    for (var text_index = 0; text_index < text.length; text_index++) {
        total_result = total_result + characterToInvisify(text[text_index]); 
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
    let every27Chars = '';
    for (let char_index = 0; char_index < text.length; char_index++) {
        every27Chars = every27Chars + text[char_index];
        if (every27Chars.length == 27) {
            let x = invisifyToCharacter(every27Chars)
            total_result = total_result + x;
            every27Chars = '';
        }
    }
    return total_result;
}

module.exports.stringToInvisify = stringToInvisify;
module.exports.invisifyToString = invisifyToString;
