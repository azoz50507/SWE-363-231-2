const customEmitter = require('./eventEmitterModule');

function getRandomSeconds() {
  return Math.random() * (2 - 0.1) + 0.1;
}

function simulateUserLogin(userId) {
  setTimeout(() => {
    const timestamp = new Date().toLocaleString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    customEmitter.emit('userLoggedIn', userId);
  }, getRandomSeconds() * 1000);
}

function simulateUserLogout(userId) {
  setTimeout(() => {
    const timestamp = new Date().toLocaleString();
    console.log(`${timestamp}: USER_${userId} logged out`);
    customEmitter.emit('userLoggedOut', userId);
  }, getRandomSeconds() * 1000);
}

// Event listeners
customEmitter.on('userLoggedIn', (userId) => {
  console.log(`Event: userLoggedIn - USER_${userId} logged in.`);
});

customEmitter.on('userLoggedOut', (userId) => {
  console.log(`Event: userLoggedOut - USER_${userId} logged out.`);
});

// Simulate user logins
for (let i = 1; i <= 5; i++) {
  simulateUserLogin(i);
}

// Simulate user logouts after a delay
for (let i = 1; i <= 5; i++) {
  simulateUserLogout(i);
}
