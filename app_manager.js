var app = require('app');

module.exports = {
  getUserHomePath: function(){
    return app.getPath('home');
  }
};
