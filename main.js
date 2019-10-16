//Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
var arrTrue = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]
var arrFalse = [1, 0]
var uniqueOccurrences = function (arr) {
    n = {}
    arr.forEach(num => {
        n[num] = (n[num] || 0) + 1
    })
    var v = Object.values(n);
    var unique = [...new Set(v)]

    if (v.length === unique.length) {
        return true
    } else {
        return false
    }
};

console.log(uniqueOccurrences(arrTrue));
console.log(uniqueOccurrences(arrFalse));