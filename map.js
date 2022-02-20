const wolf = ['w', 'o', 'l', 'f'];
const parrot = ['p', 'a', 'r', 'r', 'o', 't'];
const zebra = ['z', 'e', 'b', 'r', 'a'];

function findMatch(animal1, animal2) {

    let zoo = {};
    for(let i = 0; i < animal1.length; i++) {
        if (!zoo[animal1[i]]){
            const letter = animal1[i];
            zoo[letter] = true;    
        }
    }

    for(let j = 0; j < animal2.length; j++) {
        if(zoo[animal2[j]]){
            return true
        }
    }
    return false;

}

// Time Complexity: O(a + b);

console.log(findMatch(wolf, parrot));
