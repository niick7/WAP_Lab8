window.onload = function(){
  // Exercise 1:
  // Define a filter function on the String object. The function accepts an array of strings that
  // specifies a list of banned words. The function returns the string after removing all the
  // banned words.
  // Example:
  // console.log("This house is not nice!".filter('not'));
  // Output: "This house is nice!"
  String.prototype.filter = function(arg) {
    return this.split(' ').filter(el => el !== 'not' || el === '').join(' ');
  };
  console.log('Excersise 1')
  console.log('This is not not a fruit.'.filter('not'));

  // Exercise 2:
  // Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
  // that works by repeatedly stepping through the list to be sorted,
  // Example:[6, 4, 0, 3, -2, 1].bubbleSort();
  // Output : [-2, 0, 1, 3, 4, 6]
  Array.prototype.bubbleSort = function() {
    const length = this.length;
    const arr = this;
    for(let i = 0; i < length - 1; i++) {
      for(let j = 0; j < length - 1; j++) {
        temp = arr[j];

        if(temp > arr[j + 1]) {
          // swap value between arr[i] and arr[j]
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  };
  console.log('Excersise 2')
  console.log([6, 4, 0, 3, -2, 1].bubbleSort());

  // Exercise 3:
  // Create an object called Teacher derived from a Person function constructor, and implement
  // a method called teach that receives a string called subject, and prints out: [teacher's name]
  // is now teaching [subject]. Create a Teacher object and call its teach method.
  // Also do the same thing using Object.create. When using Object.create you will need a
  // factory function instead of a function constructor in order to pass parameters such as
  // ‘name’ to be set in the prototype.
  // 1.
  function Person(name){
    this.name = name;
  }
  Person.prototype.teach = function(subject){
    console.log(this.name + " is now teaching " + subject);
  };
  const Teacher = new Person('Tina 1');
  Teacher.teach('WAP');

  // 2.
  const Person2 = {
    name: 'Default',
    setName: function(name){
      this.name = name;
    }
  }
  const Teacher2 = Object.create(Person2);
  Teacher2.teach = function(subject){
    console.log(this.name + ' is now teaching ' + subject);
  }
  const tina = Object.create(Teacher2);
  tina.setName('Tina 2');
  tina.teach('WAA');

  // Exercise 4:
  // Write code that will create person, student, and professor objects.
  // • Person objects have
  // o name and age fields
  // o a greeting method that prints out: “Greetings, my name is [name] and I am
  // [age] years old.”
  // o a salute method that prints out: “Good morning!, and in case I dont see you,
  // good afternoon, good evening and good night!”
  // • Student objects inherit name, age, and salute from person. They also have a field
  // ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
  // [name] and I am studying [major]. The greeting should be output to the console.
  // • Professor objects inherit name, age, and salute from person. They also have a field
  // ‘department’ and have their own greeting method. Their salutation is “Good day,
  // my name is [name] and I am in the [department] department.” Output it to the
  // console.
  // • Create a professor object and a student object. Call both the greeting and salutation
  // methods on each.
  // • Do this exercise once using the object prototype approach for inheritance and then
  // using the function constructor approach.
  Person3 = {
    name: 'Default Person',
    age: 28,
    greeting: function(){
      console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.")
    },
    salute: function(){
      console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
  }
  Student = Object.create(Person3);
  Student.major = 'WAP';
  Student.greeting = function(){
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major + ".")
  }
  Professor = Object.create(Person3);
  Professor.department = 'Dreier';
  Professor.salute = function(){
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.")
  }
  nhan = Object.create(Student);
  nhan.name = 'Nhan';
  nhan.age = '32';
  nhan.greeting();
  nhan.salute();
  dinh = Object.create(Professor);
  dinh.name = 'Dinh';
  dinh.age = '32';
  dinh.greeting();
  dinh.salute();
};