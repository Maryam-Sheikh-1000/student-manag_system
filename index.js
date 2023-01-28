#! /usr/bin/env node
class Person {
    name;
    age;
}
class Student extends Person {
    course;
    rollNumber;
}
class Teacher extends Person {
    course;
    timing;
    salary;
}
class Course {
    subject;
    classtechr;
    students;
    timimg;
}
const student1 = new Student();
student1.name = "Maryam";
student1.rollNumber = "1";
student1.age = "17";
student1.course = "BlockChain";
const student2 = new Student();
student2.name = "Ayesha";
student2.rollNumber = "2";
student2.age = "18";
student2.course = "AI";
const student3 = new Student();
student3.name = "Sidrah";
student3.rollNumber = "3";
student3.age = "20";
student3.course = "CNC";
const student4 = new Student();
student4.name = "Unzila";
student4.rollNumber = "10";
student4.age = "19";
student4.course = "IOT";
const teacher = new Teacher();
teacher.name = "Beenish";
teacher.course = "English";
teacher.age = "35";
teacher.salary = "45000";
teacher.timing = "8 to 9";
const course = new Course();
course.classtechr = teacher;
course.timimg = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
student4.course = teacher.course;
const stdArray = [student1, student2, student3, student4];
course.students = stdArray;
console.log(course);
teacher.timing = "10-11";
console.log(course);
export {};
