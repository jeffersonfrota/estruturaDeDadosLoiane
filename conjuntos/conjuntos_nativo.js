const set_A =  new Set();

set_A.add(1);
set_A.add(2);
set_A.add(3);

const set_B = new Set();

set_B.add(3);
set_B.add(5);
set_B.add(6);

/*
const union = (set1, set2) => {
    const union_ab = new Set();
    set1.forEach(value => union_ab.add(value));
    set2.forEach(value => union_ab.add(value));
    return union_ab;
};

const intersection = (set1, set2) => 
{
    const intersection_ab = new Set();
    set1.forEach(value => {
        if(set2.has(value))
        {
            intersection_ab.add(value);
        }
    });
    return intersection_ab;
}

const difference = (set1, set2) =>
{
    const difference_ab = new Set();
    set1.forEach(value => {
        if(!set2.has(value))
        {
            difference_ab.add(value);
        }
    });
    return difference_ab;
}

*/

// OPERAÇOES UTIILIZANDO OPERADOR DE ESPALHAMENTPO;

/*
console.log(set_A);
console.log(set_B);

console.log(union(set_A, set_B));
console.log(intersection(set_A, set_B));
console.log(difference(set_A, set_B));
console.log(difference(set_B, set_A));
*/

const union = (set1, set2) => {
    let set = new Set([...set1, ...set2]);
    return set;
}

const intersection = (set1, set2) => {
    let set = new Set([...set1].filter(x => set2.has(x)));
    return set; 
} 

const difference = (set1, set2) => {
    let set = new Set([...set1].filter(x => !set2.has(x)));
    return set; 
} 

console.log(set_A);
console.log(set_B);

console.log(union(set_A, set_B));
console.log(intersection(set_A, set_B));
console.log(difference(set_A, set_B));
console.log(difference(set_B, set_A));

