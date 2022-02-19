const wolf = ['w', 'o', 'l', 'f'];
const parrot = ['p', 'a', 'r', 'r', 'o', 't'];
const zebra = ['z', 'e', 'b', 'r', 'a'];

function findMatch(array1, array2) {

    let map = {};
    for(let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]){
            const letter = array1[i];
            map[letter] = true;    
        }
    }

    for(let j = 0; j < array2.length; j++) {
        if(map[array2[j]]){
            return true
        }
    }
    return false;

}

// Time Complexity: O(a + b);

console.log(findMatch(wolf, zebra));
