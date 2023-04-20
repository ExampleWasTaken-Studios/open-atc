const child_process = require('child_process');

const buildElectron = () => {
  //
}

console.log('Building jar...')

let cp;
if (process.platform === 'win32') {
  cp = child_process.exec('gradlew build');
} else {
  cp = child_process.exec('./gradlew build');
}

cp.on('exit', buildElectron())






