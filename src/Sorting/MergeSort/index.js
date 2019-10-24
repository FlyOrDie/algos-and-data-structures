const merge = (arrToSort, startIndex, middleIndex, endIndex) => {
    const leftSideArray = [];
    const rightSideArray = [];
    const leftSideArrayLength = middleIndex - startIndex + 1;
    const rightSideArrayLength = endIndex - middleIndex;

    for (let i = 0; i < leftSideArrayLength; ++i) {
        leftSideArray[i] = arrToSort[startIndex + i];
    }

    for (let j = 0; j < rightSideArrayLength; ++j) {
        rightSideArray[j] = arrToSort[middleIndex + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = startIndex;

    while (i < leftSideArrayLength && j < rightSideArrayLength) {
        if (leftSideArray[i] <= rightSideArray[j]) {
            arrToSort[k] = leftSideArray[i];
            i++;
        } else {
            arrToSort[k] = rightSideArray[j];
            j++;
        }

        k++;
    }

    while (i < leftSideArrayLength) {
        arrToSort[k] = leftSideArray[i];
        i++;
        k++;
    }

    while (j < rightSideArrayLength) {
        arrToSort[k] = rightSideArray[j];
        j++;
        k++;
    }
};

const mergeSort = (arrToSort, startIndex, endIndex) => {
    if (startIndex === undefined && endIndex === undefined) {
        const arrLength = arrToSort.length;

        if (!arrLength || arrToSort.length === 1) return arrToSort;

        startIndex = 0;
        endIndex = arrToSort.length - 1;
    }

    if (endIndex <= startIndex) return arrToSort;

    const middleIndex = Math.floor((endIndex + startIndex) / 2);

    mergeSort(arrToSort, startIndex, middleIndex);
    mergeSort(arrToSort, middleIndex + 1, endIndex);

    merge(arrToSort, startIndex, middleIndex, endIndex);

    return arrToSort;
};

module.exports = mergeSort;
