function forloop(){
    arr = ["A", "B", "C", "D", "E", 1,2,3,4,5];
    var a=0;
    let i=0;
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    console.log("The Value of I is:"+i);
    a=1;
    console.log(a);
}
forloop(); 

function whileloop(){
    arr= ["Faisal", "Ahmad", "Juba", "Bhola", "Dhaka"];
    let i =0;
    while(i<arr.length){
        console.log(arr[i]);
        i++;
    }
}
whileloop();


//OF loop
//The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
function forloop1(){
    arr = ["A", "B", "C", "D", "E", 1,2,3,4,5];
    for(let i of arr){
        console.log(i);
    }
}
forloop1();

//IN loop
//The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
function forloop1(){
    arr = {a: "1", b: "2", c: "3", d: "4", e: "5"};
    for(let i in arr){
        console.log(i, arr[i]);//i is the key of the map. 
    }
}
forloop1();


//forE
function foreach(){
    arr = ["A", "B", "C", "D", "E", 1,2,3,4,5];
    arr.forEach(function(i){
        console.log(i);
    });
}
foreach();