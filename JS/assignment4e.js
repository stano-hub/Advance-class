let marks = [60, 65, 45, 35, 50];
let totalMarks = 0;

// Iterate through the marks array and determine grades
for (let i = 0; i < marks.length; i++) {
    let grade;
    if (marks[i] < 40) {
        grade = "Below Average";
    } else if (marks[i] >= 40 && marks[i] < 60) {
        grade = "Average";
    } else if (marks[i] >= 60 && marks[i] <= 100) {
        grade = "Excellent";
    } else {
        grade = "Invalid Mark";
    }

    console.log(`Mark: ${marks[i]}, Grade: ${grade}`);
    totalMarks += marks[i];
}

// Calculate average marks
let averageMarks = totalMarks / marks.length;

// Determine overall grade based on average marks
let overallGrade;
if (averageMarks < 40) {
    overallGrade = "Below Average";
} else if (averageMarks >= 40 && averageMarks < 60) {
    overallGrade = "Average";
} else if (averageMarks >= 60 && averageMarks <= 100) {
    overallGrade = "Excellent";
} else {
    overallGrade = "Invalid Mark";
}

console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks}`);
console.log(`Overall Grade: ${overallGrade}`);