'use strict';

var React = require('react'),
    router = require('./router');

router.run(function(Handler, state){
  React.render(<Handler {...state} />, document.getElementById("todoapp"));
});
