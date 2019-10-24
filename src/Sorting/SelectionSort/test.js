require('should/should');

const dataset = require('./dataset');
const expectedResult = require('./expectedResult');
const selectionSort = require('./index');

describe('Selection Sort', () => {
    it('should work correctly with a random data sort', () => {
        selectionSort(dataset).should.be.eql(expectedResult);
    });
    it('should work correctly with an empty array', () => {
        selectionSort([]).should.be.eql([]);
    });
    it('should work correctly with a single value', () => {
        selectionSort([10]).should.be.eql([10]);
    });
});
