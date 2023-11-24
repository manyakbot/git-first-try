const grades = [5, 4, 3, 5, 4];
const students = ['Misha', 'Sasha', 'Kasha', 'Oleg', 'Stas'];

for (let grade = 0; grade < grades.length; grade++) {
    document.write(students[grade] + " " + grades[grade], '<br>')
}