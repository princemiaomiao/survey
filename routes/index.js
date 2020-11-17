var express = require('express');

var userRoute=require('./userRoute');

module.exports=function(app){
  userRoute.route(app);
}
