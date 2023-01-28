#! /usr/bin/env node

import inquirer from "inquirer";

class Person {
    name?: string;
    age?: string;
}

class Student extends Person {
    course?: string;
    rollNumber?: string;
}

class Teacher extends Person {
    course?: string;
    timing?: string;
    salary?: string;
}

class Course {
    subject?: string;
    classtechr?: Teacher;
    students?: Student[];
    timimg?: string;
}

const student1: Student = new Student();
student1.name = "Maryam";
student1.rollNumber = "1";
student1.age = "17";
student1.course = "BlockChain"

const student2: Student = new Student();
student2.name = "Ayesha";
student2.rollNumber = "2";
student2.age = "18";
student2.course = "AI"

const student3: Student = new Student();
student3.name = "Sidrah";
student3.rollNumber = "3";
student3.age = "20";
student3.course = "CNC"

const student4: Student = new Student();
student4.name = "Unzila";
student4.rollNumber = "10";
student4.age = "19";
student4.course = "IOT"

const teacher: Teacher = new Teacher();
teacher.name = "Beenish";
teacher.course = "English";
teacher.age = "35";
teacher.salary = "45000";
teacher.timing = "8 to 9";

const course: Course = new Course();
course.classtechr = teacher;
course.timimg = teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;
student4.course = teacher.course;

const stdArray: Student[] = [student1, student2, student3, student4];
course.students = stdArray;
console.log(course);

teacher.timing = "10-11";
console.log(course);

