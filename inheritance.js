class Parent{
    constructor(){
        this.fatherName="Altab Hossain";

    }
    
}

class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
       
    }
    getFullName(){
        return this.name +" "+ this.fatherName;
    }
}

var baby= new Child('Lipi');
var baby2=new Child ("Ripon");
var baby3=new Child ("Sajeeb");
console.log(baby.getFullName());
console.log(baby3.getFullName());