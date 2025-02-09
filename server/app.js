require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://canasmh:' + process.env.MDB_ATLAS_AUTH + '@networthdle.xbjpss2.mongodb.net/Celebrities';

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
mongoose.connect(mongoURI);

// Functions to convert Date
//function convertDate(dateObj) {
//    const dd = String(dateObj.getDate()).padStart(2, '0')
//    const yyyy = String(dateObj.getFullYear())
//    var mm = ''
//
//    switch (dateObj.getMonth().toString()) {
//        case '0':
//            mm = "January";
//            break;
//        case '1':
//            mm = "February";
//            break;
//        case '2':
//            mm = "March";
//            break;
//        case '3':
//            mm = "April";
//            break;
//        case '4':
//            mm = "May";
//            break;
//        case '5':
//            mm = "June";
//            break;
//        case '6':
//            mm = "July";
//            break;
//        case '7':
//            mm = "August";
//            break;
//        case '8':
//            mm = "September";
//            break;
//        case '9':
//            mm = "October";
//            break;
//        case '10':
//            mm = "November";
//            break;
//        case '11':
//            mm = "December";
//            break;
//        default:
//            mm = null;
//            console.log(`Month ${dateObj.getMonth().toString()} not accounted for`);
//    }
//
//    return mm + " " + dd + ", " + yyyy
//}
//
//function todaysDate() {
//    const today = new Date()
//    return convertDate(today)
//}

const celebSchema = new mongoose.Schema({
    name: {type: String, required: true},
    net_worth: {type: String, required: true},
    nationality: {type: String},
    occupation: {type: Array},
    birthday: {type: String},
});

const celebPlayedSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: String, required: true}
});

const Celeb = new mongoose.model("celeb", celebSchema);
const playedCeleb = new mongoose.model("PlayedCeleb", celebPlayedSchema);

function getCelebPlayed(celebName) {
    return playedCeleb.findOne({name: celebName}).exec();
}

function getCelebData(celebName) {
    return Celeb.find({name: celebName}).exec();
}

function getTodaysCeleb(date) {
    return playedCeleb.findOne({date: date}).exec();
}

app.get("/get-celeb-data/:date", async function(req, res) {
    var todaysCeleb = await getTodaysCeleb(req.params.date);
    var celebData = await getCelebData(todaysCeleb.name)
    res.json(celebData[0])
});


app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
});
