const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require('../models/user');
const Message = require('../models/message');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const connect = require("../dbconfig/connect");
connect();

//Searches database by Email/Name/Bits ID
app.get("/level0/search/:searchName",function(req,res){

    const searchParam = req.params.searchName; 

    User.findOne({$or:[{ email: searchParam},{name: searchParam},{bitsId:searchParam}]},function(err,searchResult){

        if(searchResult)
        {
            res.send(searchResult);
        }
        else
        {
            res.send("No such user found");
        }
    });

});

//Inserts message written into database. Awaits approval by core
app.post("/level0/sendMessage",function(req,res){

    const newMessage = new Message({
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        body: req.body.message,
        status: 0,
        coreId: null
    });

    newMessage.save(function(err){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("Message sent. Awaiting for approval");
        }
    });
        
});

//Gets all the messages sent by the particular user and displayed in sent page
app.get("/level0/getMessage/:senderId",function(req,res){

    const senderEmail = req.params.senderId;
    
    Message.find({senderId: senderEmail},function(err,sentMessage){
        if(!err)
        {
            res.send(sentMessage);
        }
        else
        {
            console.log(err);
        }
    });    
});