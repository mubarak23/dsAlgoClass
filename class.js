// class is like a blueprint for defining object with predefined properties and methods
// creating object from class
// when we are inside of a class, THIS refer to the individual instance of the class
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
  fullName() {
    return `You Fullname is ${this.firstName} - ${this.lastName}`;
  }
}

// instance method works on individual class instance
// THIS --- refers to the individual instance

// class method are created with static keyword that belong to class and not necessary the class instance
// static class method can be called withput instantiating the class
// static method are use to create class utilities
const pupil = new Student("shittu", "trend", 2019);

console.log(pupil.fullName());
