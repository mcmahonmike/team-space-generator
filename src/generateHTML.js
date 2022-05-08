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
        ${generateManagerCard(team[0])}
        ${generateTeamCard(team)}
    </main>
    
</body>
</html>
    `;
}

function generateManagerCard(manager) {
    return `
    <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <div class="card-header card text-white bg-primary mb-3">${manager.name}</div>
                <div class="card-body">
                  <ul class="list-group list-group-flush card border-secondary mb-3">
                    <li class="list-group-item">${manager.id}</li>
                    <li class="list-group-item">${manager.email}</li>
                    <li class="list-group-item">${manager.officeNumber}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`
}

function generateTeamCard(team) {
    const employees = team.map(emp => {
        switch (emp.getRole()) {
            case "Engineer":
             return`
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <div class="card-header card text-white bg-primary mb-3">${emp.getName()}</div>
                <div class="card-body">
                  <ul class="list-group list-group-flush card border-secondary mb-3">
                    <li class="list-group-item">${emp.getId()}</li>
                    <li class="list-group-item"> <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
                    <li class="list-group-item"><a href='https://github.com/${emp.github}' target='_blank'>${emp.github}</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`

          case "Intern":
             return`
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <div class="card-header card text-white bg-primary mb-3">${emp.getName()}</div>
                <div class="card-body">
                  <ul class="list-group list-group-flush card border-secondary mb-3">
                    <li class="list-group-item">${emp.getId()}</li>
                    <li class="list-group-item"> <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
                    <li class="list-group-item">${emp.school}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>`
}
})
return employees.join('');
}


module.exports = generateHTML;