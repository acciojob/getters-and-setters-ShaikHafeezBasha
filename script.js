//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name;
	}
	set age(age){
		this.age=age;
	}
}

class Student extends Person {
	study(){
		console.log(`${student.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${teacher.name} is teaching`);
	}
}
const person=new Person("John",30)
const student=new Student("John",30)
student.study();
const teacher=new Teacher("Alice",30)
teacher.teach();
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
