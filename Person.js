function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}

function Teacher(firstName, lastName, schoolName, subject) {
    Person.call(this, firstName, lastName);
    this.SchoolName = schoolName || "unknown";
    this.Subject = subject || "unknown";
}

Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

var maurice = new Teacer("Maurice", "Clifford", "NJIT", "English");
            
alert(maurice.getFullName()); // James Bond
alert(maurice instanceof Teacher); // true
alert(maurice instanceof Person); // true
