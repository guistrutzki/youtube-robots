const readline = require('readline-sync');
const robots = {
  input: require('./robots/input'),
  text: require('./robots/text'),
}

async function start() {
  robots.input();
  robots.text();
}

start();