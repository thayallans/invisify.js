const { characterToInvisify } = require('./utils/characterToInvisify');

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

module.exports.stringToInvisify = stringToInvisify
