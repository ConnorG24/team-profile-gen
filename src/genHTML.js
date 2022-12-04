const createManager = function(manager){
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