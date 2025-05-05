const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

// Function to invert key-value pairs in an object
const invertDictionary = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
};

// Create dictionaries for British to American translation
const britishToAmericanSpelling = invertDictionary(americanToBritishSpelling);
const britishToAmericanTitles = invertDictionary(americanToBritishTitles);
// Combine all dictionaries for easier lookup
const americanToBritishDict = { ...americanOnly, ...americanToBritishSpelling, ...americanToBritishTitles };
const britishToAmericanDict = { ...britishOnly, ...britishToAmericanSpelling, ...britishToAmericanTitles };



class Translator {

    translate(text, locale) {
        // 1. Validate inputs
        if (text === undefined || locale === undefined) {
            return { error: 'Required field(s) missing' };
        }
        if (text === "") {
            return { error: 'No text to translate' };
        }
        if (locale !== 'american-to-british' && locale !== 'british-to-american') {
            return { error: 'Invalid value for locale field' };
        }

        let translation = text;
        let dictionary;
        let titleDictionary;
        let timeRegex;
        let targetTimeSeparator;

        if (locale === 'american-to-british') {
            dictionary = americanToBritishDict;
            titleDictionary = americanToBritishTitles;
            timeRegex = /(\d{1,2}):(\d{2})/g; // Match HH:MM
            targetTimeSeparator = '.';
        } else { // british-to-american
            dictionary = britishToAmericanDict;
            titleDictionary = britishToAmericanTitles;
            timeRegex = /(\d{1,2})\.(\d{2})/g; // Match HH.MM
            targetTimeSeparator = ':';
        }

        let changesMade = false;

        // Sort dictionary keys by length (descending) to match longer phrases first
        const sortedKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length);

        // 2. Translate Titles first (case-sensitive and specific format)
        Object.entries(titleDictionary).forEach(([key, value]) => {
            // Escape the key for regex special characters (like '.')
            const escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            
            let titleRegex;
            // Check if the original key ends with a period.
            if (key.endsWith('.')) {
                titleRegex = new RegExp(`(^|\\s)(${escapedKey})(?=\\s|$)`, 'gi');
            } else {
                titleRegex = new RegExp(`(^|\\s)(${escapedKey})\\b`, 'gi');
            }

            if (titleRegex.test(translation)) {
                // Add console logs for debugging this specific case
                if (locale === 'british-to-american' && key === 'mrs') {
                    console.log(`--- Debugging Title: ${key} ---`);
                    console.log(`Value: ${value}`);
                    console.log(`Original Translation String: ${translation}`);
                }
                translation = translation.replace(titleRegex, (match, p1, p2) => {
                    const translatedTitle = value.charAt(0).toUpperCase() + value.slice(1);
                    // Add console logs for debugging this specific case
                    if (locale === 'british-to-american' && key === 'mrs') {
                        console.log(`Match: ${match}`);
                        console.log(`p1: ${p1}`);
                        console.log(`p2: ${p2}`);
                        console.log(`Calculated translatedTitle: ${translatedTitle}`);
                    }
                    return `${p1 || ''}<span class="highlight">${translatedTitle}</span>`;
                });
                changesMade = true;
                // Add console logs for debugging this specific case
                if (locale === 'british-to-american' && key === 'mrs') {
                     console.log(`Translation String After Replace: ${translation}`);
                     console.log(`--- End Debugging Title: ${key} ---`);
                }
            }
        });


        // 3. Translate Time
        if (timeRegex.test(translation)) {
            translation = translation.replace(timeRegex, (match, hour, minute) => {
                changesMade = true;
                return `<span class="highlight">${hour}${targetTimeSeparator}${minute}</span>`;
            });
        }


        // 4. Translate words and phrases (case-insensitive, match whole words)
        sortedKeys.forEach(key => {
            // Skip titles as they were handled separately
            if (titleDictionary.hasOwnProperty(key) || (locale === 'british-to-american' && Object.values(americanToBritishTitles).includes(key))) {
                 return;
            }
            // Regex to match whole word/phrase, case-insensitive
            // Use word boundaries (\b) but handle cases where key might start/end with non-word chars if necessary (though current dictionaries seem okay)
            const wordRegex = new RegExp(`\\b${key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi'); // Escape special regex chars in key

            if (wordRegex.test(translation)) {
                 translation = translation.replace(wordRegex, (match) => {
                    changesMade = true;
                    // Preserve original case? For most words, yes. Let's wrap the dictionary value.
                    // If the original match was capitalized, capitalize the translation.
                    // This is a simplification; proper case preservation can be complex.
                    let translatedWord = dictionary[key.toLowerCase()]; // Use lowercase key to lookup
                    if (match[0] === match[0].toUpperCase()) {
                         // Simple capitalization of the first letter if the original match was capitalized
                         translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
                    }
                     // Handle all caps? If match is all caps, maybe make translation all caps?
                     if (match === match.toUpperCase()) {
                        translatedWord = translatedWord.toUpperCase();
                     }

                    return `<span class="highlight">${translatedWord}</span>`;
                });
            }
        });


        // 5. Handle no translation
        if (!changesMade) {
            return { text: text, translation: "Everything looks good to me!" };
        }

        return { text: text, translation: translation };
    }
}

module.exports = Translator;