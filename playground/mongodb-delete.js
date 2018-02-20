//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {

    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {

    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {

    // });

    // db.collection('Users').deleteMany({name: 'Darwin Jore'}).then((result) => {
    //     console.log(result);
    // }, (err) => {

    // });

    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('5a8c02ea5a362090dcc75e0c')
    }).then((result) => {
        console.log(result);
    }, (err) => {

    });


    client.close();
});