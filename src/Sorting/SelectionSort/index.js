const selectionSort = (arr) => {
    const sortedArr = [];
    const arrLength = arr.length;
    let minValue = Infinity;
    let minIndex = null;

    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
            const currentValue = arr[j];

            if (currentValue === null) continue;
            if (currentValue < minValue) {
                minValue = currentValue;
                minIndex = j;
            }
        }

        sortedArr.push(minValue);
        minValue = Infinity;
        arr[minIndex] = null;
    }

    return sortedArr;
};

module.exports = selectionSort;
