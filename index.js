const readline = require('readline-sync');
const robots = {
  input: require('./robots/input'),
  text: require('./robots/text'),
  image: require('./robots/image')
}

async function start() {
  // robots.input();
  // await robots.text();
  await robots.image();
}

start();