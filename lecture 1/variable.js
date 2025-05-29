// fullname = "Gautam Kuamr";
// age = "24";
// price = "1000";
// radius = "10";
// a = "null";

// console.log(fullname, age, price, radius, a);

// name = "apna cllg";
// console.log(name);

// const age = 4;

// console.log(age);

const student = {
  name: "Gautam Kumar",
  age: 24,
  college: "Apna College",
  course: "BCA",
  isStudent: true,
  marks: [85, 90, 78],
  address: {
    city: "Delhi",
    state: "Delhi",
    country: "India",
  },
};

// student["age"] = student["age"] + 1;
// console.log(student["age"]);

student.age = student.age + 1;
console.log(student.age);
student.marks.push(95);
console.log(student.marks);
