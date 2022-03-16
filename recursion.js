
function foo(num) {
    if (num === 10) {
        return num;
    }
    num++;
    return foo(num);
}

console.log(foo(0));