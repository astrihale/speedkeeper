// Get in the cluster for forking processes
const cluster = require('cluster');
const cpuCores = require('os').cpus().length;

// Create the speed keeping function
function speedKeeper() {
    setInterval(() => {
        1 + 1;
    }, 0.001);
}

// Create the functions to start work - fork as much `speedKeeper()` instances as much
function start() {
    // If this thread is the master, just fork yourself and do work
    for (let i = 0; i < cpuCores; i++) {
        cluster.fork();
    }

    setTimeout(speedKeeper, 1);
}

// Create the guard function
function guard(routine) {
    if (cluster.isMaster) {
        setTimeout(routine, 1);
    } else {
        speedKeeper();
    }
}

// And export out the functions
module.exports = {
    start, guard
};
