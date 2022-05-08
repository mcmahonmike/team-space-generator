const Employee = require('../lib/Employee.js')

test('checks if employee objects are created', () => {
    const employee = new Employee('Bruce', 1, 'BruceLee@gmail.com');

    const name = "Bruce";
    const id = 1;
    const email = "BruceLee@gmail.com"

    expect(employee.name).toBe(name);
    expect(employee.email).toBe(email);
    expect(employee.id).toEqual(id);
})

test('checks if employee name is recieved', () => {
    const employee = new Employee ('Bruce', 1, 'BruceLee@gmail.com');

    const name = employee.getName();

    expect(employee.name).toBe(name)
})

test('checks if employee id is recieved', () => {
    const employee = new Employee('Bruce', 1, 'BruceLee@gmail.com');

    const id = employee.getId();

    expect(employee.id).toEqual(id)

})

test('checks if employee email is received', () => {
    const employee = new Employee ('Bruce', 1, 'BruceLee@gmail.com')

    const email = employee.getEmail()

    expect(employee.email).toBe(email)

})

test('checks if employee role is received', () => {
    const employee = new Employee ('Bruce', 1, 'BruceLee@gmail.com')

    const role = employee.getRole()

    expect(role).toBe("Employee")

})

















