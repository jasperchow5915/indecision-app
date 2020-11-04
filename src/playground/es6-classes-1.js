// website of saling cars
//
//
//
//
class Person{
    constructor(name = 'Anonymous',age = 0){

        this.name = name ;
        this.age = age;
    }

    getGretting(){
        // return 'Hi.I am '+ this.name + '!';
        return `Hi.I am ${this.name} !`;
    }

    getDes(){
        return `${this.name} is ${this.age} year(s) old.`
    }

}


class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;

    }

    hasMajor(){
        return !!this.major;
    }
    getDes(){
        let des = super.getDes();
        if (this.hasMajor()) {
            des += `with a major in ${this.major}`;
        }
        return des;
    }
}

class traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGretting(){
        let gret = super.getGretting();
        if(this.homeLocation){
            gret += ` I'm visiting from ${this.homeLocation}.`
        }
        return gret
    }


}


const me = new Student('Jasper Zhou', 28,'Computer Science' );
console.log(me.getDes());

const jaz = new traveler('Jasper Chow',30,'Guangzhou');
console.log(jaz.getGretting());

const shelby = new traveler('Shelby Tu',30);
console.log(shelby.getGretting());

const other = new Student('Shelby');
console.log(other.hasMajor());

const unknown = new Person();
console.log(unknown.getGretting());