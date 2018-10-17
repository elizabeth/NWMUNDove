var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var Server = require ('../api/server').Server;
var server = new Server();

describe('Server', function() {
    it ('should be defined', function() {
        // Given
        // When
        // Then
        expect(Server).to.not.be.undefined;
    });

    it ('should have a function called addition', function() {
        // Given
        // When
        // Then
        expect(server.addition).to.not.be.undefined;
    });

    it('should have addition function which adds two numbers', function() {
        // Given
        // When
        // Then
        expect(server.addition(1, 2)).to.equal(3);
    });
});

