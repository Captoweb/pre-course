const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
 
let res2 = numbers.map(item => {
    let res = item.filter(el => el % 2 == 0) 
    return res
})
console.log(res2)
