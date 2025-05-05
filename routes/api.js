'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;

      // Call the translate method from the Translator instance
      const result = translator.translate(text, locale);

      // Send the result back as JSON
      // The result object will contain either { text, translation } or { error }
      res.json(result);
    });
};
