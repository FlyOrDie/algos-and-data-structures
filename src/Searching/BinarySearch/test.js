require('should/should');

const dataset = require('./dataset');
const sortedDataSet = dataset.sort((a, b) => a - b);
const { binarySearchRecursive, iterativeBinarySearch } = require('./index');


describe('BinarySearch', () => {
    describe('Recursive', () => {
        it('should return found item index, if value is in the array', () => {
            binarySearchRecursive(sortedDataSet, -8).should.be.eql(2);
        });
        it('should return -1 if value was not found', () => {
            binarySearchRecursive(sortedDataSet, 10000000).should.be.eql(-1);
        });
        it('should return 0 for the first value in the array', () => {
            binarySearchRecursive(sortedDataSet, sortedDataSet[0]).should.be.eql(0);
        });
        it('should return sortedDataSet.length - 1 index for the last value in the array', () => {
            const valueToFind = sortedDataSet[sortedDataSet.length - 1];
            binarySearchRecursive(sortedDataSet, valueToFind).should.be.eql(sortedDataSet.length - 1);
        });
        it('should return -1 with an empty array', () => {
            binarySearchRecursive([], 10000).should.be.eql(-1);
        });
    });
    describe('Iterative', () => {
        it('should return found item index, if value is in the array', () => {
            iterativeBinarySearch(sortedDataSet, -8).should.be.eql(2);
        });
        it('should return -1 if value was not found', () => {
            iterativeBinarySearch(sortedDataSet, 10000000).should.be.eql(-1);
        });
        it('should return 0 for the first value in the array', () => {
            iterativeBinarySearch(sortedDataSet, sortedDataSet[0]).should.be.eql(0);
        });
        it('should return sortedDataSet.length - 1 index for the last value in the array', () => {
            const valueToFind = sortedDataSet[sortedDataSet.length - 1];
            iterativeBinarySearch(sortedDataSet, valueToFind).should.be.eql(sortedDataSet.length - 1);
        });
        it('should return -1 with an empty array', () => {
            iterativeBinarySearch([], 10000).should.be.eql(-1);
        });
    });
});
