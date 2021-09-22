class Student{

  constructor(stName,stId){

      this.name = stName;
      this.id = stId;

    //   default mane ei property tah sobar ei mane rifat and gazi object er thakbe:
    this.schoolName = "Bamoil Ideal High School"

  }


}

const rifat = new Student("Tanvir Rifat",1);
const gazi = new Student("Gazi Rajin",2);
console.log(rifat,gazi);