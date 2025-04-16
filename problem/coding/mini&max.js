function problem1(arr, value) {
    if (value == "mini") {
        let a = arr[0];
        let temp;
        for (let i = 0; i < arr.length; i++) {

            if (a >= arr[i + 1]) {
                temp = arr[i + 1];
                a = temp;
            } else {
                temp = a;
            }
        }
        console.log(temp);
    }
    else if (value == "max") {
        let a = arr[0];
        let temp;
        for (let i = 0; i < arr.length; i++) {

            if (a <= arr[i + 1]) {
                temp = arr[i + 1];
                a = temp;
            } else {
                temp = a;
            }
        }
        console.log(temp);
    }
    else {
        console.log("Invalid value");
    }
}

problem1([10, 9, 8, 7, 6, -55, 5, 4, 3, 2, 1, 100], "mini");