// for a given array with marks of students are [85, 90, 78, 92, 88], find the average marks of the entire class.

let marks = [85, 90, 78, 92, 88];
let totalMarks = 0;
for (let i = 0; i < marks.length; i++) {
  totalMarks = totalMarks + marks[i];
}
let averageMarks = totalMarks / marks.length;
console.log("Average Marks of the class:", averageMarks);
