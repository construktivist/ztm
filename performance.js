const { performance } = require('perf_hooks');

const pets = ['gibbs'];

function feedPet(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'gibbs') {
            console.log(`Fed Gibbs!`);
        }
    }
    let t1 = performance.now();
    console.log(`Call took ${t1-t0} milliseconds`)
}

feedPet(pets);