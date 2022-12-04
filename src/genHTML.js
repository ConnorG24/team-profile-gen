const createManagerCard = function(manager){
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">workspace_premium</i>
            </div>

            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNum}</p>
            </div>

        </div>
    </div>
    `
}
const createEngineerCard = function(engineer){
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">support_agent</i>
            </div>

            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>

        </div>
    </div>
    `
}
const createInternCard = function(intern){
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">school</i>
            </div>

            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
}

assembleCards = function(data){
    assembledCards = [];
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager'){
            const managerCard = createManagerCard(employee);
            assembledCards.push(managerCard);
        }

        if(role ==='Engineer'){
            const engineerCard = createEngineerCard(employee);
            assembledCards.push(engineerCard);
        }

        if(role === 'Intern'){
            const internCard = createInternCard(employee);
            assembledCards.push(internCard);
        }

        const joinCards = assembledCards.join('');
        const createTeamProfile = renderHTML(joinCards);
        return createTeamProfile;
    }    
}

const renderHTML = function(joinCards){
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                   ${joinCards} 
      
      </div>
  </div>
  </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  </html>`
}