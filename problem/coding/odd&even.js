function oddOrEven(arr){
    let ar1 = [], ar2 = [];
    for(let i of arr){
        if(i % 2 === 0){
            ar1.push(i);
        } else {
            ar2.push(i);
        }
    }

    console.log(ar1);
    console.log(ar2);
}

oddOrEven([1,2,3,4,5,6,7,8,9,10]);


//This problem can be solved Daynamically. but remember that PUSH()  method is more convenient and avoids the need to manually manage the index.
function oddOrEven(arr) {
    let ar1 = [], ar2 = [];
    let evenIndex = 0, oddIndex = 0;

    for (let i of arr) {
        if (i % 2 === 0) {
            ar1[evenIndex] = i;
            evenIndex++;
        } else {
            ar2[oddIndex] = i;
            oddIndex++;
        }
    }

    console.log(ar1); // Output the array of even numbers
    console.log(ar2); // Output the array of odd numbers
}

oddOrEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);