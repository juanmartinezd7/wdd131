
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
};
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// GPA Calculation
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0); // Added initial value (0) for clarity
const gpa = pointsTotal / gpaPoints.length;
console.log("GPA:", gpa);

// Short Words Filtering
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(word => word.length < 6);
console.log("Short Words:", shortWords);

// Finding Lucky Number
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
if (luckyIndex === -1) {
  console.log("Lucky number not found in the array.");
} else {
  console.log("Lucky number found at index:", luckyIndex);
}