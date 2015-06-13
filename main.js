var remote = require('remote');
var AppManager = remote.require('./app_manager');
setTimeout(function(){
  console.log('on the next run loop');
}, 0);
setImmediate(function(){
  console.log('end of the run loop');
});
var homePath = AppManager.getUserHomePath();
console.log(homePath);
