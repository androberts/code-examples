function getChange(amt, coinTypes) {
    let outerLoops = 0;
    let innerLoops = 0;
    
    if (amt === 0) {
        return [];
    }
    let solutions = [];
    for (let i = 1; i <= amt; i++) {
        outerLoops++;
        /**
         * For the current value i,
         * get the optimal solution
         * use prev. optimal solutions if they exist
         * else, calculate a new solutions and memoize
         */

        for (let j = 0; j < coinTypes.length; j++) {
            innerLoops++;
            let c = coinTypes[j];
            if (c === i) {
                solutions[i] = [c];
                break;
            }
            if (c > i) {
                continue; // coin is too big
            }
            let prevSolution = solutions[i];
            let solutionMinusCoin = solutions[i - c];
            if (!solutionMinusCoin) {
                continue;
            }
            let currentSolution = [...solutionMinusCoin, c];
            if (!prevSolution || currentSolution.length < prevSolution.length) {
                solutions[i] = currentSolution;
            }

            // let numCoinsRequired = Math.floor(i / c);
            // if (prevSolution && numCoinsRequired > prevSolution.length) {
            //     continue;
            // }
            // for (let k = 0; k < numCoinsRequired; k++) {
            //     currentSolution.push(c);
            // }
            // let remainder = i % c;
            // let remainderSolution = [];
            // if (remainder > 0) {
            //     remainderSolution = solutions[remainder];
            //     if (!remainderSolution) {
            //         continue;
            //     }
            // }
            // currentSolution = [
            //     ...currentSolution,
            //     ...remainderSolution
            // ];
            // if (!prevSolution || currentSolution.length < prevSolution.length) {
            //     solutions[i] = currentSolution;
            // }
        }
    }
    console.log("Outer loops: ", outerLoops);
    console.log("Inner loops: ", innerLoops);
    return solutions[amt];
}

let result = getChange(27, [3,4,6]);
console.log(result);
