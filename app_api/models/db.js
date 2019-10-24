const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://Darragh:v7sp9umh@cluster0-or84a.mongodb.net/ConcertBay';
mongoose.connect(dbURI);

const readLine = require ('readline');
if (process.platform === 'win32'){
const rl = readLine.createInterface ({
input: process.stdin,
output: process.stdout
});
rl.on ('SIGINT', () => {
process.emit ("SIGINT");
});
rl.on ('SIGUSR2', () => {
process.emit ("SIGUSR2.");
});
rl.on ('SIGTERM', () => {
process.emit ("SIGTERM");
});
}

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

require('./concerts');