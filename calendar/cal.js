let list1 = [
    [0, 2],
    [5, 7],
    [10, 11]
];

let list2 = [
    [1, 3],
    [5, 9],
    [10, 12]
];

const combined = [...list1, ...list2].sort((a, b) => {
    if(a[0] > b[0]) {
        return 1;
    } else if (a[0] < b[0]) {
        return -1;
    } else {
        return 1
    }
});

console.log(JSON.stringify(combined));

function getTimesAvailable(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i];
        let next = arr[i + 1];

        let endFirst = curr[1];
        let startSecond = next[0];

        if (endFirst < startSecond) {
            let interval = [endFirst, startSecond];
            result.push(interval);
        }
    }
    return result;
}

let timesAvail = getTimesAvailable(combined);

console.log(JSON.stringify(timesAvail));