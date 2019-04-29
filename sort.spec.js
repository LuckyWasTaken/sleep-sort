const assert = require('assert');
const core  = require('./sort');

describe('Sorting predefined arrays', () => {
    it('Sorts correctly', () => {
        core.sleepSort([5, 1000, 50000, 2, 1, 3, 15]).then((sorted) => {
            assert.deepEqual([1, 2, 3, 5, 15, 1000, 50000], sorted, 'Sorting small predefined array');
        })
    })
})

describe('Sorting arrays with range 1-50000 of 5000 elements', () => {
    for (let i = 0; i < 500; i++) {
        it('Sorts correctly', () => {
            const arrayToSort = prepopulateArray(5000, 1, 50000);

            core.sleepSort(arrayToSort)
            .then((sorted)=> {
                assert.deepEqual(arrayToSort.sort( (a,b) => a - b), sorted, 'Sorting random array');
            })
        })
    }
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function prepopulateArray(length, min, max) {
    let array = [];

    for (let i = 0; i < length; i++) {
        array.push(getRandomInt(min,max));
    }

    return array;
}