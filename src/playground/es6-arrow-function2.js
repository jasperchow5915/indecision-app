const add = (a, b)=>{
    // console.log(arguments);
    return a+ b;
}

console.log(add(55, 1,1001));

const user = {
  name: "Jasper",
  cities:['Melbourne','Sydney','Guangzhou'] ,
    printPlacesLived( ){
        const cityMessage = this.cities.map( (city) => {
            return this.name + ' has lived in '+ city;
        });
        return cityMessage;
        // this.cities.forEach( (city)=> {
        //     console.log(this.name + ' has lived live in ' +city);
        //
        // });
    }
};

console.log(user.printPlacesLived())

//challenge area

const multiplier = {
    numbers: [6,8,34,65],
    multiplyBy: 3,
    multiply( ){
        return this.numbers.map( (num) => {
            return num * this.multiplyBy;
        });

    }
}

console.log(multiplier.multiply());
