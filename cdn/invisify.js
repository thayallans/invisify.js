"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    const {
      characterToInvisify,
      invisifyToCharacter
    } = require('./utils/conversion');
    /**
     * Converts string into invisible characters by converting to Invisify Standards
     * @param {string} text - The value to invisify
     * @return {string}
     */


    const stringToInvisify = (text, options = {}) => {
      let total_result = '';

      for (var text_index = 0; text_index < text.length; text_index++) {
        total_result = total_result + characterToInvisify(text[text_index].toUpperCase());
      }

      return total_result;
    };
    /**
     * Converts invisible characters to string by converting to Invisify Standards
     * @param {string} text - The value to invisify
     * @return {string}
     */


    const invisifyToString = (text, options = {}) => {
      let total_result = '';
      let every27Chars = '';

      for (let char_index = 0; char_index < text.length; char_index++) {
        every27Chars = every27Chars + text[char_index];

        if (every27Chars.length == 27) {
          let x = invisifyToCharacter(every27Chars);
          total_result = total_result + x;
          every27Chars = '';
        }
      }

      return total_result;
    };

    module.exports.stringToInvisify = stringToInvisify;
    module.exports.invisifyToString = invisifyToString;
  }, {
    "./utils/conversion": 2
  }],
  2: [function (require, module, exports) {
    const character1 = '\u200B';
    const character2 = '\u200C';
    const character3 = '\u200D';
    const character4 = '\u200E';
    const character5 = '\u200F';
    const alpha_to_invisible = {
      'A': character1 + character1 + character1,
      'B': character1 + character1 + character2,
      'C': character1 + character1 + character3,
      'D': character1 + character1 + character4,
      'E': character1 + character1 + character5,
      'F': character1 + character2 + character1,
      'G': character1 + character2 + character2,
      'H': character1 + character2 + character3,
      'I': character1 + character2 + character4,
      'J': character1 + character2 + character5,
      'K': character1 + character3 + character1,
      'L': character1 + character3 + character2,
      'M': character1 + character3 + character3,
      'N': character1 + character3 + character4,
      'O': character1 + character3 + character5,
      'P': character1 + character4 + character1,
      'Q': character1 + character4 + character2,
      'R': character1 + character4 + character3,
      'S': character1 + character4 + character4,
      'T': character1 + character4 + character5,
      'U': character1 + character5 + character1,
      'V': character1 + character5 + character2,
      'W': character1 + character5 + character3,
      'X': character1 + character5 + character4,
      'Y': character1 + character5 + character5,
      'Z': character2 + character1 + character1,
      ':': character2 + character1 + character2,
      '/': character2 + character1 + character3,
      '?': character2 + character1 + character4,
      '=': character2 + character1 + character5,
      '&': character2 + character2 + character1,
      '.': character2 + character2 + character1
    };

    const characterToInvisify = character => {
      return alpha_to_invisible[character];
    };

    const invisifyToCharacter = main_string => {
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
    };

    module.exports.characterToInvisify = characterToInvisify;
    module.exports.invisifyToCharacter = invisifyToCharacter;
  }, {}]
}, {}, [1]);