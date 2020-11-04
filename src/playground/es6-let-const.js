var nameVar = 'Jasper';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet',nameLet);

const nameConst = 'Jasper';
//Block scoping

var fullName = 'Jasper Zhou';
let firstName;

if (fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName)

