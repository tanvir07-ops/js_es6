// function declaration:
// function fullName(firstName,lastName){

//     console.log(`${firstName} ${lastName}`)

// }

// fullName("Tanvir","Rifat");


// function expression(mane e holo kono variable e function ti rekhe take access kora):

// const result = function(fistName,lastName){

//       console.log(`${fistName} ${lastName}`)


// }

// result("Gazi","Rifat")




// arrow function(first e thakbe variable er name = (parameter thakbe ei bracket e) => return jah korte hobe tah thakbe):
// const res = (x,y) => x+y;
// console.log(res(1,2));

// another arrow function:(jdi kono parameter nah thake tahole () faka rakhlei hobe thn jah return korabo tah => er pore diye dibo):
// const result = () => 10;
// console.log(result())



// another arrow function:
// const result = (x,y) => {

//    const sum = x+y;
//    const diff = x-y;
//    return `The sum : ${sum} and the sub: ${diff}`


// }

// console.log(result(20,10));




// function er default value set kore deoaa:

function sum(x,y = 10){
    console.log(x+y);
}

sum(5);
// eikhane sum(5) diyechi mane x = 5 geseh but y = Nan roise tai first e output none dekhabe ! but function sum(x,y=10);y=10 diyechi mane y jodi man nah thake tahole default 10 niye nibe!;