module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    console.log(req.body);
    if(req.method=="POST"){
        const task = req.body;
        const anterior = listTasks[listTasks.length-1].id;
        task.dueDate = new Date();
        task.id = anterior+1;
        listTasks.push(task)
        context.res = {
            status:201
        }

    }
    if(req.method=="GET"){
        context.res={
            status:200,
            body:listTasks
        }
    }
};

var listTasks= [
    {
        id:1,
        text:"Prueba",
        status:"In Progrees",
        dueDate: new Date(),
        responsible: "David Herrera"
    }
];