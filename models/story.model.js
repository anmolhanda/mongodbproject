var mongoose= require("mongoose");
var Schema=mongoose.Schema;

var storiesSchema = new mongoose.Schema({
  author:String,
  title: {type: String,unique:true},
  created_at:{type:Date,default:Date.now},
  summary:String,
  content: {type: String},
  imageLink:String,
  comments:[{body:String,commented_by:String,date:Date}],
  slug:String
});

// Build the User model

module.exports=mongoose.model( 'Story', storiesSchema,'stories');