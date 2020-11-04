// console.log("utils.js is running!");
// const square = (x)=> x*x;
//
// const add = (a, b) => a + b;

const isAdult = (age)=>  age>=18;
const canDrink = (age)=> age>=21;
const isSenior = (age)=> age>=65;
// export default subtract;

// export { square,add,subtract as default };

// export default (a, b) => a-b;

export {isAdult,canDrink,isSenior as default};
