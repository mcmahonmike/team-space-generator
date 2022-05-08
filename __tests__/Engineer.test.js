const Engineer = require('../lib/Engineer')

test('checks if engineer object is created', () => {
    const engineer = new Engineer('Bruce', 1, 'BruceLee@gmail.com', 'gitbrucelee')

    const name = "Bruce"
    const id = 1
    const email = "BruceLee@gmail.com"
    const github = "gitbrucelee"

    expect(engineer.name).toBe(name)
    expect(engineer.id).toBe(id)
    expect(engineer.email).toBe(email)
    expect(engineer.github).toBe(github)
})

test('checks if engineer github username is received', () => {
    const engineer = new Engineer ('Bruce', 1, 'BruceLee@gmail.com', 'gitbrucelee')

    const github = engineer.getGithub()

    expect(engineer.github).toBe(github)

})

test('checks if engineer role is received', () => {
    const engineer = new Engineer ('Bruce', 1, 'BruceLee@gmail.com', 'gitbrucelee')

    const role = engineer.getRole()

    expect(role).toBe("Engineer")

})

