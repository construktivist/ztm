const alpha = [1, 2, 3, 4];
const beta = [1, 2, 4, 4];

function findPairedSum(array, sum) {
    
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                return true;
            }
        }
    }

    return false;
}

console.log(findPairedSum(beta, 8));

function findPairedSum2(array, sum){

    const gamma = new Set();

    for(let i = 0; i < array.length; i++) {
        if (gamma.has(array[i])) {
            return true;
        }
        gamma.add(sum - array[i]);
    }
    return false;

}

console.log(findPairedSum(alpha, 7));