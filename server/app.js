const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/Celebrities';

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
mongoose.connect(mongoURI);

// Functions to convert Date
function convertDate(dateObj) {
    const dd = String(dateObj.getDate()).padStart(2, '0')
    const yyyy = String(dateObj.getFullYear())
    var mm = ''

    switch (dateObj.getMonth().toString()) {
        case '0':
            mm = "January";
            break;
        case '1':
            mm = "February";
            break;
        case '2':
            mm = "March";
            break;
        case '3':
            mm = "April";
            break;
        case '4':
            mm = "May";
            break;
        case '5':
            mm = "June";
            break;
        case '6':
            mm = "July";
            break;
        case '7':
            mm = "August";
            break;
        case '8':
            mm = "September";
            break;
        case '9':
            mm = "October";
            break;
        case '10':
            mm = "November";
            break;
        case '11':
            mm = "December";
            break;
        default:
            mm = null;
            console.log(`Month ${dateObj.getMonth().toString()} not accounted for`);
    }

    return mm + " " + dd + ", " + yyyy
}

function todaysDate() {
    const today = new Date()
    return convertDate(today)
}

const celebSchema = new mongoose.Schema({
    name: {type: String, required: true},
    net_worth: {type: String, required: true},
    nationality: {type: String},
    occupation: {type: Array},
    birthday: {type: String},
});

const celebPlayedSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: String, default: todaysDate()}
});

const Celeb = new mongoose.model("celeb", celebSchema);
const celebPlayed = new mongoose.model("PlayedCeleb", celebPlayedSchema);

function getAllCelebs() {
    return Celeb.find({}).exec();
};

function getCelebPlayed(celebName) {
    return celebPlayed.findOne({name: celebName}).exec();
}

function getCelebData(celebName) {
    return Celeb.find({name: celebName}).exec();
}

function checkForNewDate() {
    const today = todaysDate();
    return celebPlayed.findOne({date: today}).exec();
}

async function getNewCeleb() {
    const celebs = await getAllCelebs();
    var nCelebs = celebs.length;
    var newCelebFound = false;
    
    var newCeleb = null;
    var currentCeleb;
    var iCeleb;
    var celebPlayed;

    while (!newCelebFound) {
        iCeleb = Math.floor(Math.random() * nCelebs);
        currentCeleb = celebs[iCeleb];
        celebPlayed = await getCelebPlayed(currentCeleb.name);
        if (!celebPlayed) {
            newCelebFound = true;
            newCeleb = currentCeleb;
            const newPlayedCeleb = new celebPlayed({name: currentCeleb.name});
            newPlayedCeleb.save(function(err) {
                if (err) {
                    console.log(`Error saving celeb: ${err}`)
                } else {
                    console.log(`${newPlayedCeleb} add to database`);
                }
            });
        }
        console.log(`Current Celeb: ${currentCeleb.name}`);  
        newCeleb = currentCeleb;   
        newCelebFound = true;
                                                    
    }

    return newCeleb;
}



app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})