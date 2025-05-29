// write a code which can give grades to students according to their scores:
// // 90-100: A
// // 80-89: B
// // 70-79: C
// // 60-69: D
// // 0-59: F

let score = parseInt(prompt("Enter your score:"));
if (score >= 90 && score <= 100) {
  console.log(score, "Grade: A");
} else if (score >= 80 && score < 90) {
  console.log(score, "Grade: B");
} else if (score >= 70 && score < 80) {
  console.log(score, "Grade: C");
} else if (score >= 60 && score < 70) {
  console.log(score, "Grade: D");
} else if (score >= 0 && score < 60) {
  console.log(score, "Grade: F");
} else {
  console.log("Invalid score. Please enter a score between 0 and 100.");
}
