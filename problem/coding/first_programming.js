function first(a, b){
    console.log(a + b);
}
first(5, 6);


//Type checking

const a = "Faisal Ahmad Juba";
const b = 25;
console.log(typeof a); 
console.log(typeof b);

//return uses

function second(e,f){
    const a = e/2;
    const b = f/2
    const c = a*a + 2*a*b + b*b;
    return c;
}
d = second(4,6);
console.log(d);