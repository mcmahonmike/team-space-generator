//Function to generate the HTML page
function generateHTML(team) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Space</title>
</head>
<body>
    <header id="hero" class="d-flex justify-content-center">
        <h1 class="">Team Space</h1>
    </header>
    <main>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        ${generateManagerCard(team[0])}
        ${generateTeamCard(team)}
    </div>    
    </main>
    
</body>
</html>
    `;
}
//Function to run the manager input
function generateManagerCard(manager) {
    return `
            <div class="col">
              <div class="card">
                <div class="card-header card text-white bg-primary mb-3">${manager.name}
                <h5>MANAGER</h5></div>
                <div class="card-body">
                  <ul class="list-group list-group-flush card border-secondary mb-3">
                    <li class="list-group-item"> ID: ${manager.id}</li>
                    <li class="list-group-item"> Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
                  </ul>
                </div>
              </div>
            </div>`
}
//Function to generate cards for Interns or Engineers
function generateTeamCard(team) {
    const employees = team.map(emp => {
        switch (emp.getRole()) {
            case "Engineer":
             return`
            <div class="col">
              <div class="card">
                <div class="card-header card text-white bg-primary mb-3">${emp.getName()}
                <h5>ENGINEER</h5></div>
                <div class="card-body">
                  <ul class="list-group list-group-flush card border-secondary mb-3">
                    <li class="list-group-item"> ID: ${emp.getId()}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
                    <li class="list-group-item"> GitHub: <a href='https://github.com/${emp.getGithub()}' target='_blank'>${emp.getGithub()}</a></li>
                  </ul>
                </div>
              </div>
            </div>`

          case "Intern":
             return`
            <div class="col">
              <div class="card">
                <div class="card-header card text-white bg-primary mb-3">${emp.getName()}
                <h5>INTERN</h5></div>
                <div class="card-body">
                  <ul class="list-group list-group-flush card border-secondary mb-3">
                    <li class="list-group-item"> ID: ${emp.getId()}</li>
                    <li class="list-group-item"> Email:  <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
                    <li class="list-group-item"> School: ${emp.getSchool()}</li>
                  </ul>
                </div>
              </div>
            </div>`
}
})
return employees.join('');
}


module.exports = generateHTML;