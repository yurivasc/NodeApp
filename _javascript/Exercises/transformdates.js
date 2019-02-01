// need to transfor a string like this
//'2w3h40m30s' into a timespamp.



transformToDate('2w3h40m30s')

function transformToDate(str) {

    let weeks = ""
    let days = ""
    let hours = ""
    let minutes = ""
    let seconds = ""


    let concatNumber = "";
    for (let i = 0; i < str.length; i++) {
        var current = str[i];

        if ("0123456789".includes(current)) {
            concatNumber = concatNumber + current;
        } else {
            switch(current){
                case "w": {
                    weeks = concatNumber;
                    concatNumber = "";
                    break;
                }
                case "d": {
                    days = concatNumber;
                    concatNumber = "";
                    break;
                }
                case "h": {
                    hours = concatNumber;
                    concatNumber = "";
                    break;
                }
                case "m": {
                    minutes = concatNumber;
                    concatNumber = "";
                    break;
                }
                case "s": {
                    seconds = concatNumber;
                    concatNumber = "";
                    break;
                }
            }
        }
    }

    console.log("quantidade:", weeks, days, hours, minutes, seconds)
    var sumdays = (weeks*7) + (days) + (hours/24) + (minutes/24/60) + (seconds/24/60/60);

    let date = new Date()
    console.log(sumdays);
}