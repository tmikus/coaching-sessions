function BaseAnimal(name) {
  console.log('BaseAnimal constructor');
  this.name = name;
}

BaseAnimal.prototype.roar = function () {
  console.log(`${this.name} roars loudly`);
};

BaseAnimal.staticFunction = function () {
  console.log('This is a static function');
};

BaseAnimal.staticVariable = 'This is a static variable';

//
// Create a generic cat
//
function Cat(name) {
  console.log('Cat constructor');
  BaseAnimal.apply(this, arguments);
}

Object.setPrototypeOf(Cat.prototype, BaseAnimal.prototype);

//
// Create a house cat
//
function HouseCat(name) {
  console.log('HouseCat constructor');
  Cat.apply(this, arguments);
}

Object.setPrototypeOf(HouseCat.prototype, Cat.prototype);

HouseCat.prototype.roar = function () {
  console.log(`${this.name} meows quietly`);
};

// Call the static function
console.log('BaseAnimal.staticFunction:');
BaseAnimal.staticFunction();
console.log('Cat.staticFunction:');
// Cat.staticFunction();

// Print the static variable
console.log('BaseAnimal.staticVariable:', BaseAnimal.staticVariable);
console.log('Cat.staticVariable:', Cat.staticVariable);

// Create animal instances.
const genericAnimal = new BaseAnimal('Generic Animal');
const cat = new Cat('Lily');
const houseCat = new HouseCat('Humpy');

// Use prototype methods.
console.log('Time for some animal karaoke:');
genericAnimal.roar();
cat.roar();
houseCat.roar();

// Retrospectively add a method to the Base Animal class
BaseAnimal.prototype.run = function () {
  console.log(`${this.name} runs fast`);
};

console.log('Ready, set, GO!');
genericAnimal.run();
cat.run();
houseCat.run();

// Let's play with the prototype chain
console.log('is instance of HouseCat: ', houseCat instanceof HouseCat);
console.log('is instance of Cat: ', houseCat instanceof Cat);
console.log('is instance of BaseAnimal: ', houseCat instanceof BaseAnimal);
console.log('is instance of Object: ', houseCat instanceof Object);
console.log('is instance of Array: ', houseCat instanceof Array);

