//complete this code
class Person {
	constructor(nam,age){
		this.nam=nam;
		this.age=age;
	}
	getter(){
		return this.nam;
	}
	setter(age){
		this.age=age;
	}
}

class Student extends Person {
	study(){
		console.log(`${nam} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${nam} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
