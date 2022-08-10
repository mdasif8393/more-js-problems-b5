var numbers = [1,2,3,4,5,6,7,8,9,10,2,3, 4];
var newNumbers = [];
// for (var i = 0; i < numbers.length; i++){
//    if(newNumbers.indexOf(numbers[i]) === -1){
//     newNumbers.push(numbers[i]);
//    };
// }
// console.log(newNumbers);
numbers.forEach(number => {
    if(newNumbers.indexOf(number) === -1){
        newNumbers.push(number);
    }
})
console.log(newNumbers);