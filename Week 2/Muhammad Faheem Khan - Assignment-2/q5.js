// Question - 5 (class)
// Create employee class with property name and cnic with default value.
// Create the get and set methods of employee class attributes.
// Create a printInfo method inside class which will print employee information.
// Create two instances of employee class with different names and cnic and call the printinfo
// method.

class Employee{
    constructor(name = 'Faheem Khan', cnic = 3520265368971){
        this.name = name;
        this.cnic= cnic;
    }
    // get method for name
    getName(){
        return this.name
    }
    // set method for name
    setName(name){
        this.name = name
    }
    // get method for cnic
    getCnic(){
        return this.cnic 
    }
    // set method for cnic
    setCnic(cnic){
        this.cnic = cnic
    }
    // printInfo method to print employee information
    printInfo(){
        console.log(`Employee Data:\n Name of the employee: ${this.name}\n Cnic # ${this.cnic} `)
    }

}

// employee with default parameters
const employee = new Employee()
employee.printInfo()

// first employee
const employee1 = new Employee('Abdul Rehman', 35202123456789)
employee1.printInfo()

// second employee
const employee2 = new Employee('Ameer Hamza', 35202987654321)
employee2.printInfo()
