require('should/should');

const dataset = require('./dataset');
const expectedResult = require('./expectedResult');
const mergeSort = require('./index');

describe('MergeSort', () => {

    it('should work correctly with a random data sort', () => {
        console.log(dataset);
        mergeSort(dataset).should.be.eql(expectedResult);
    });
    it('should work correctly with an empty array', () => {
        mergeSort([]).should.be.eql([]);
    });
    it('should work correctly with a single value', () => {
        mergeSort([10]).should.be.eql([10]);
    });
});
