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


















