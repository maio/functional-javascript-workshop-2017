function getIn(object, path) {
    var childObject = object;
    var parts = path.split('.');

    for (var i = 0; i < parts.length; i++) {
        if (typeof childObject === 'undefined') {
            return undefined;
        }

        childObject = childObject[parts[i]];
    }

    return childObject;
}

console.log(getIn({a: {b: {c: 42}}}, 'a.b.c'));
