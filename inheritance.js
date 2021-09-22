class Parent{

    constructor(motherName,cousineName){
         this.fatherName = "Mizanur Rahman";
         this.motherName = motherName;
         this.cousineName = cousineName;

    }




}




// eikhane e amra parent class ti ke inheritance korechi Child class er modde:


class Child extends Parent{

  constructor(name){
     super('Rabeya Begum',"tanvir, arafat, rajin")

    //   ei super holo je amar parent class ke inheritance korechi tai likha laagse and parent class er constructor e only motherName chilo tai ei super() er moddeh parent er motherName pass kore diyechi;
      this.name = name;


  }

  getFullName(){
      return `My name is ${this.name}

My father name is ${this.fatherName}

and My mother name is ${this.motherName}

and my cousin names are ${this.cousineName}
`;
  }


}

const rifat = new Child("Tanvir Rifat");
console.log(rifat.motherName);
console.log(rifat.getFullName());