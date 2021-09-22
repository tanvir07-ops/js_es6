const ages1 = [1,2,3,4,5,6];
const ages2 = [7,8,9,10];
const ages3 = [11,12,13,14];

// console.log(ages1.concat(ages2).concat(ages3));

// now using three dots(...) it's modern js and looks very cleaner

// eti holo array diye add kora:

console.log([...ages1, ...ages2, ...ages3]);


// nicher ti holo array chara 3 ti ke add kora:

console.log(...ages1,...ages2,...ages3);


const searchMax = [1,100,500,600,800,10000];

// eikhane console.log korle NaN dekhabe karon array theke Math.max() diye max number ber kora jay nah!; shudu matro variable thakle Math.max() diye ber kora jay: tai array er jonne threedoots use kora laagbe:
// console.log(Math.max(searchMax));

console.log(Math.max(...searchMax));



// string er jonne:
const firstName = "Tanvir";
const lastName = "Rifat";
console.log(firstName+" "+lastName);
console.log(...firstName,...lastName);

// sum:
var arr = [1,2,3];
function sum(x,y,z){
    console.log(x+y+z);
}

sum(...arr);





