function getElementPositions(array, value) {
    const positions = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            positions.push(i);
        }
    }

    return positions;
}

const myArray = [1, 2, 3, 2, 4, 2];
const valueToFind = 2;

const positions = getElementPositions(myArray, valueToFind);
console.log(positions); // Output: [1, 3, 5]
