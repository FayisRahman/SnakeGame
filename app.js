const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const credentials = require('./credentials.js');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(credentials.url);

const userSchema = {
    name:String,
    score:Number,
}

const User = mongoose.model('User',userSchema);

app.route("/leaderboard")
.get(async function(req, res){
    try{
        const leaderboad = await User.find({}).sort({score:-1});
        console.log(leaderboad);
        res.status(200).send(leaderboad);
    }catch(err){
        console.log(err);
        res.status(404).send(err);
    }
})
.post(async function(req, res){
    console.log(req.body);
        const newUser = User({
            name: req.body.name,
            score: req.body.score,
        });
    try{
        await newUser.save();
        res.status(200).send({response: "Data added Successfully"});
    }catch(err){
        res.status(404).send(err);
    }
});


app.listen(process.env.PORT || 3000, function() {
    console.log('Server started on port 3000');
});