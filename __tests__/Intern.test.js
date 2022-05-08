const Intern = require('../lib/Intern')

test('checks if intern object is created', () => {
    const intern = new Intern('Bruce', 1, 'BruceLee@gmail.com', 'University')

    const name = "Bruce"
    const id = 1
    const email = "BruceLee@gmail.com"
    const school = "University"

    expect(intern.name).toBe(name)
    expect(intern.id).toBe(id)
    expect(intern.email).toBe(email)
    expect(intern.school).toBe(school)
})

test('checks if intern school is received', () => {
    const intern = new Intern ('Bruce', 1, 'BruceLee@gmail.com', 'University')

    const school = intern.getSchool()

    expect(intern.school).toBe(school)

})

test('checks if intern role is received', () => {
    const intern = new Intern ('Bruce', 1, 'BruceLee@gmail.com', 'University')

    const role = intern.getRole()

    expect(role).toBe("Intern")

})

