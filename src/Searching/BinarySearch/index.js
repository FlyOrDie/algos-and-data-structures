const binarySearchRecursive = (arr, valueToFind, low = 0, high) => {
    high = high === undefined ? arr.length - 1 : high;

    if (high < low) {
        return -1;
    }

    const middle = Math.floor((low + high) / 2);
    const middleValue = arr[middle];

    if (valueToFind === middleValue) return middle;
    if (valueToFind < middleValue) return binarySearchRecursive(arr, valueToFind, low, middle - 1);

    return binarySearchRecursive(arr, valueToFind, middle + 1, high);
};

exports.binarySearchRecursive = binarySearchRecursive;
