const{ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a8e7b7dd3c19b5c784db2fd'}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5a8e7b7dd3c19b5c784db2fd').then((todo) => {
    console.log(todo);
});