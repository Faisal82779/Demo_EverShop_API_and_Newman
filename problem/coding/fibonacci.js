function fibonacci(n) {
    let a = 0, b = 1, next, arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(a);
        next = a + b;
        a = b;
        b = next;
    }
    console.log(arr);
}

fibonacci(9); 