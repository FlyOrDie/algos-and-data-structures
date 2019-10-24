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

const iterativeBinarySearch = (arr, valueToFind) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((endIndex + startIndex) / 2);
        const middleValue = arr[middleIndex];

        if (middleValue === valueToFind) return middleIndex;
        if (middleValue > valueToFind) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }

    return -1;
};

exports.binarySearchRecursive = binarySearchRecursive;
exports.iterativeBinarySearch = iterativeBinarySearch;
