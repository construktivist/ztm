const { performance } = require('perf_hooks');

// const pets = new Array(100).fill('gibbs');

// function feedPet(array) {
//     let t0 = performance.now();
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'gibbs') {
//             console.log(`Fed Gibbs!`);
//         }
//     }
//     let t1 = performance.now();
//     console.log(`Call took ${t1-t0} milliseconds`)
// }

// feedPet(pets);

const images = new Array(10).fill('IMAGE')

// O(n)
function compressAllImages(arr) {
    arr.forEach(image => {
        console.log(image);
    });
}

// compressAllImages(images);


// O(1)
function compressFirstImage(arr) {
    console.log(arr[0]);
}

compressFirstImage(images);