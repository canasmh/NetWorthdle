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

function yesterdaysDate() {
    const today = new Date()
    const yesterday = new Date(today)

    yesterday.setDate(yesterday.getDate() - 1)
    
    return convertDate(yesterday)
}

export {todaysDate, yesterdaysDate}