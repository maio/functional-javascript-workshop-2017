// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function foo(items) {
    var result = [];
    for (var i = 0; i < items.length; i++) {
        if (items[i] % 2 === 0) {
            result.push(items[i] * 2);
        }
    }

    return result;
}

console.log(foo([1,2,3,4,5,6]));
