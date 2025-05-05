const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    // Translate Mangoes are my favorite fruit. to British English
    test('Translate "Mangoes are my favorite fruit." to British English', (done) => {
        const input = 'Mangoes are my favorite fruit.';
        const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
        
    });

    // Translate I ate yogurt for breakfast. to British English
    test('Translate "I ate yogurt for breakfast." to British English', (done) => {
        const input = 'I ate yogurt for breakfast.';
        const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    

    // Translate We had a party at my friend's condo. to British English
    test('Translate "We had a party at my friend\'s condo." to British English', (done) => {
        const input = "We had a party at my friend's condo.";
        const expected = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    
    // Translate Can you toss this in the trashcan for me? to British English
    test('Translate "Can you toss this in the trashcan for me?" to British English', (done) => {
        const input = "Can you toss this in the trashcan for me?";
        const expected = 'Can you toss this in the <span class="highlight">bin</span> for me?';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate The parking lot was full. to British English
    test('Translate "The parking lot was full." to British English', (done) => {
        const input = "The parking lot was full.";
        const expected = 'The <span class="highlight">car park</span> was full.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    
    // Translate Like a high tech Rube Goldberg machine. to British English
    test('Translate "Like a high tech Rube Goldberg machine." to British English', (done) => {
        const input = "Like a high tech Rube Goldberg machine.";
        const expected = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    
    // Translate To play hooky means to skip class or work. to British English
    test('Translate "To play hooky means to skip class or work." to British English', (done) => {
        const input = "To play hooky means to skip class or work.";
        const expected = 'To <span class="highlight">bunk off</span> means to skip class or work.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    
    // Translate No Mr. Bond, I expect you to die. to British English
    test('Translate "No Mr. Bond, I expect you to die." to British English', (done) => {
        const input = "No Mr. Bond, I expect you to die.";
        const expected = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate Dr. Grosh will see you now. to British English
    test('Translate "Dr. Grosh will see you now." to British English', (done) => {
        const input = "Dr. Grosh will see you now.";
        const expected = '<span class="highlight">Dr</span> Grosh will see you now.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate Lunch is at 12:15 today. to British English
    test('Translate "Lunch is at 12:15 today." to British English', (done) => {
        const input = "Lunch is at 12:15 today.";
        const expected = 'Lunch is at <span class="highlight">12.15</span> today.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    
    // Translate We watched the footie match for a while. to American English
    test('Translate "We watched the footie match for a while." to American English', (done) => {
        const input = "We watched the footie match for a while.";
        const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate Paracetamol takes up to an hour to work. to American English
    test('Translate "Paracetamol takes up to an hour to work." to American English', (done) => {
        const input = "Paracetamol takes up to an hour to work.";
        const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate First, caramelise the onions. to American English
    test('Translate "First, caramelise the onions." to American English', (done) => {
        const input = "First, caramelise the onions.";
        const expected = 'First, <span class="highlight">caramelize</span> the onions.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate I spent the bank holiday at the funfair. to American English
    test('Translate "I spent the bank holiday at the funfair." to American English', (done) => {
        const input = "I spent the bank holiday at the funfair.";
        const expected = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate I had a bicky then went to the chippy. to American English
    test('Translate "I had a bicky then went to the chippy." to American English', (done) => {
        const input = "I had a bicky then went to the chippy.";
        const expected = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate I've just got bits and bobs in my bum bag. to American English
    test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', (done) => {
        const input = "I've just got bits and bobs in my bum bag.";
        const expected = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    // Translate The car boot sale at Boxted Airfield was called off. to American English
    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', (done) => {
        const input = "The car boot sale at Boxted Airfield was called off.";
        const expected = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });


    // Translate Have you met Mrs Kalyani? to American English
    test('Translate "Have you met Mrs Kalyani?" to American English', (done) => {
        const input = "Have you met Mrs Kalyani?";
        const expected = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    
    // Translate Prof Joyner of King's College, London. to American English
    test('Translate "Prof Joyner of King\'s College, London." to American English', (done) => {
        const input = "Prof Joyner of King's College, London.";
        const expected = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });

    
    // Translate Tea time is usually around 4 or 4.30. to American English
    test('Tea time is usually around 4 or 4.30." to American English', (done) => {
        const input = "Tea time is usually around 4 or 4.30.";
        const expected = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.equal(result.translation, expected);
        done();
    });
    
    // Highlight translation in Mangoes are my favorite fruit.
    test('Highlight translation in "Mangoes are my favorite fruit."', (done) => {
        const input = 'Mangoes are my favorite fruit.';
        const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.include(result.translation, '<span class="highlight">');
        assert.equal(result.translation, expected); // Check the full string too
        done();
    });

    // Highlight translation in I ate yogurt for breakfast.
    test('Highlight translation in "I ate yogurt for breakfast."', (done) => {
        const input = 'I ate yogurt for breakfast.';
        const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        const locale = 'american-to-british';
        const result = translator.translate(input, locale);
        assert.include(result.translation, '<span class="highlight">');
        assert.equal(result.translation, expected);
        done();
    });
    
    // Highlight translation in We watched the footie match for a while.
    test('Highlight translation in "We watched the footie match for a while."', (done) => {
        const input = 'We watched the footie match for a while.';
        const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.include(result.translation, '<span class="highlight">');
        assert.equal(result.translation, expected);
        done();
    });
    
    // Highlight translation in Paracetamol takes up to an hour to work.
    test('Highlight translation in "Paracetamol takes up to an hour to work."', (done) => {
        const input = 'Paracetamol takes up to an hour to work.';
        const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        const locale = 'british-to-american';
        const result = translator.translate(input, locale);
        assert.include(result.translation, '<span class="highlight">');
        assert.equal(result.translation, expected);
        done();
    });

});
