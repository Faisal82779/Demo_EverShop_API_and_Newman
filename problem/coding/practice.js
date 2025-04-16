function problem1() {
    const arr = [10,9,3,2,18,7,6,-55,5,4];
    let a = arr[0];
    let temp;
    for (let i in arr) {

        if (a > arr[i+1]) {
            temp = arr[i+1];
            a = temp;
        } else {
            temp = a;
        }
    }
    console.log(temp);
}

problem1();


function problem2() {
    const arr = [10,9,3,2,18,7,6,-55,5,4];
    let a = arr[0];
    let temp;
    for (let i of arr) {

        if (a > arr[i+1]) {
            temp = arr[i+1];
            a = temp;
        } else {
            temp = a;
        }
    }
    console.log(temp);
}

problem2();



function problem3() {
    const arr = [10,9,3,2,18,7,6,-55,5,4];
    let a = arr[0];
    let temp;
    for (let i=0; i<arr.length; i++) {

        if (a > arr[i+1]) {
            temp = arr[i+1];
            a = temp;
        } else {
            temp = a;
        }
    }
    console.log(temp);
    
}

problem3();