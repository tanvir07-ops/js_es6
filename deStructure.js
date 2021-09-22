// const person = {name : "Tanvir Rifat", email : "tanvir@example.com", address : "Bamoil,Demra-Dhaka", phone : "01886633949"}

// console.log(person.name,person.email)

// // deStructure er means holo kono boro ekti structure theke koyekti structure ke niye kaaj kora:

// // jemon uporer code tite amra person object er shudu name and email ke access korechi:

// // aro modern upay e access kora jay ta holo:

// const {name,email} = person;

// // eikhane const{name,email} = person means holo person object er name ar email key ke access korechi const{name,email} diye:

// console.log(name,email)


// // array keo niye eivabe kaaj kora jay:
// const friends = ["Rajin","Rafi","shifat","shanto","joy","rabbi"];
// const [firstFriend,...restOfFriends] = friends;

// // eikhane firstFriend diy shudu rajin ke access kora hoise and ...restOfFriends diye rajin baad e baki sob friends der ke access kora hoise array er moddeh!

// console.log(restOfFriends)


// nested object er jonne:
const student = {
    name :"Tanvir Rifat",
    contact:{
        email : "tanvir@example.com",
        phone : "01886633949"
    }
}

// amra email ke access korte chaitesi jah ase student obj er moddeh abar contact object er moddeh tai student.contact likhsi!
const {email} = student.contact;
console.log(email)