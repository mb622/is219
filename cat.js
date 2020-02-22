function Cat () {
    let meow = 'purr'; // private
    this.name = 'Jonathan';
    this.nap = function() {
    console.log(`${this.name} naps and sometimes says ${meow}`);
    }
}
const meowmaster = new Cat();
meowmaster.nap();
 
console.log(sonic.name) //valid value
console.log(sonic.cuteness) // undefined
