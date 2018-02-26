var {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');

var {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();
const users = [{
    _id : userOneId,
    email : 'darwin@creopark.no',
    password : '111111',
    tokens : [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
},{
    _id : userTwoId,
    email : 'darwin@email.coms',
    password : '333333'
}];

const todos = [{
    text: 'First test todo',
    _id: new ObjectId()
}, {
    text: 'Second test todo',
    _id: new ObjectId(),
    completed: true,
    completedAt: 888
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};