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
                <h3>${engineer}</h3>
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