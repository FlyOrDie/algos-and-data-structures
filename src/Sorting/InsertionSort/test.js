require('should/should');

const dataset = require('./dataset');
const expectedResult = require('./expectedResult');
const insertionSort = require('./index');

describe('InsertionSort', () => {
    it('should work correctly with a random data sort', () => {
        insertionSort(dataset).should.be.eql(expectedResult);
    });
    it('should work correctly with an empty array', () => {
        insertionSort([]).should.be.eql([]);
    });
    it('should work correctly with a single value', () => {
        insertionSort([10]).should.be.eql([10]);
    });
});
