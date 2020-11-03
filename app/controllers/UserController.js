var Constants = require('../constants');
var Tasks = Constants.Tasks

let UserController = {

    /**************User gets all Tasks **************/
    getAllTasks: function(req, res) {
        res.json({ success: 'true', data: Tasks })
    },

    /**************User edit Task **************/
    editTask: function(req, res) {
        let id = req.query.id;
        let myTask = Tasks.find((element) => element.id == id)
        if (myTask) {
            myTask.title = req.body.title;
            myTask.description = req.body.description
            res.json({ success: 'true', data: Tasks })
        } else {
            res.json({ success: 'false', data: Tasks })
        }
    },

    /**************User delete Task **************/
    deleteTask: function(req, res) {
        let id = req.query.id;
        let myTask = Tasks.find((element) => element.id == id)
        if (myTask) {
            const index = Tasks.indexOf(myTask);
            if (index > -1) {
                Tasks.splice(index, 1);
            }
            res.json({ success: 'true', data: Tasks })
        } else {
            res.json({ success: 'false', data: Tasks })
        }
    },
}
module.exports = UserController;