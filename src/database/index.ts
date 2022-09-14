import { connect, connection } from 'mongoose';

// Set up default mongoose connection
const mongoDB = 'mongodb+srv://bdebsi2022:bS9ZgpKeJCgzWCWn@cluster0.brhlltb.mongodb.net/?retryWrites=true&w=majority';

connect(mongoDB, { dbName: 'tde' });

connection.on('connected', () => {
    console.log('connected to MongoDB!');
});

connection.on('error', (err) => {
    console.log(err);
});