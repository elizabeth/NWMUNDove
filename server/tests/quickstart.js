var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var Quickstart = require ('../api/quickstart').Quickstart;
var quickstart = new Quickstart();

describe('sheets_read', function() {
    it ('should be defined', function() {
        // Given
        // When
        // Then
        expect(Quickstart).to.not.be.undefined;
    });
});