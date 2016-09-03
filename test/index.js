'use strict';

const Code = require('code');
const Lab = require('lab');
const Lib = require('../lib');

// Fixtures go here


// Test shortcuts

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const describe = lab.describe;
const it = lab.it;

describe('module-test', () => {

    it('should pass test', (done) => {

        expect(Lib()).to.be.true();
        done();

    });

});
