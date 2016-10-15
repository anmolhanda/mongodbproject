var mongoose= require("mongoose");
var userModel=require('./models/user.model');
var storyModel=require('./models/story.model');
var dbURI='mongodb://anmolhanda:anmolhanda93@ds037262.mlab.com:37262/leavethemarks';
module.exports.connect=mongoose.connect(dbURI);

mongoose.connection.on('connected',function(){
console.log('mongoose connected');
})

mongoose.connection.on('error',function(err){
console.log('mongoose error'+JSON.stringify(err));
})

mongoose.connection.on('disconnected',function(){
console.log("mongoose disconnected");
})