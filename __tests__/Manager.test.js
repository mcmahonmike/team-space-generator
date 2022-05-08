const Manager = require('../lib/Manager')

test('checks if manager object is created', () => {
    const manager = new Manager('Bruce', 1, 'BruceLee@gmail.com', 'Room 1')

    const name = "Bruce"
    const id = 1
    const email = "BruceLee@gmail.com"
    const officeNumber = "Room 1"

    expect(manager.name).toBe(name)
    expect(manager.id).toBe(id)
    expect(manager.email).toBe(email)
    expect(manager.officeNumber).toBe(officeNumber)
})

test('checks if manager role is received', () => {
    const manager = new Manager ('Bruce', 1, 'BruceLee@gmail.com', 'Room 1')

    const role = manager.getRole()

    expect(role).toBe("Manager")

})

