// =================  [Making Select HTML Elements] =====================
// Making Month List in Form
let monthList = ['January','February','March','April','May','Jun','July','August','September','October','November','December'];
let monthNum = new Date();
let monthCountNum = monthNum.getMonth();
let dateCountNum = monthNum.getDate();
let tempNum = 0;
let tempMonthData = '';
while(tempNum < 12){
    if (monthCountNum == tempNum) {
        tempMonthData += `<option value="${tempNum}" Selected>${monthList[tempNum]}</option>`;
    }else{
        tempMonthData += `<option value="${tempNum}">${monthList[tempNum]}</option>`;
    }
    tempNum++;
}
document.getElementById('dobMonthList').innerHTML = tempMonthData;
document.getElementById('nowMonthList').innerHTML = tempMonthData;

// Making Date List in DoB Select Box
function dobMonthListF(){
    let tempM;
    let tempNum2 = 0;
    let tempData2 = '';
    let tempCM = parseInt(document.getElementById('dobMonthList').value);
    if (tempCM == 0 || tempCM == 2 || tempCM == 4 || tempCM == 6 || tempCM == 7 || tempCM == 9 || tempCM == 11) {
        tempM = 31;
    }else if (tempCM == 3 || tempCM == 5 || tempCM == 8 || tempCM == 10) {
        tempM = 30;
    }else if (tempCM == 1) {
        tempM = 29;
    }
    while(tempNum2 < tempM){
        tempNum2++;
        tempData2 += `<option value="${tempNum2}">${tempNum2}</option>`;
    }
    document.getElementById('dobDateList').innerHTML = tempData2;
}

// Making Date List in Now Select Box
function nowMonthListF(){
    let tempM;
    let tempNum2 = 0;
    let tempData2 = '';
    let tempCM = parseInt(document.getElementById('nowMonthList').value);
    if (tempCM == 0 || tempCM == 2 || tempCM == 4 || tempCM == 6 || tempCM == 7 || tempCM == 9 || tempCM == 11) {
        tempM = 31;
    }else if (tempCM == 3 || tempCM == 5 || tempCM == 8 || tempCM == 10) {
        tempM = 30;
    }else if (tempCM == 1) {
        tempM = 29;
    }
    while(tempNum2 < tempM){
        tempNum2++;
        if (tempNum2 == dateCountNum) {
            tempData2 += `<option value="${tempNum2}" selected>${tempNum2}</option>`;
        }else{
            tempData2 += `<option value="${tempNum2}">${tempNum2}</option>`;
        }
    }
    document.getElementById('nowDateList').innerHTML = tempData2;
}

// Making Select Boxes when loaded the page
function monthListF(){
    dobMonthListF();
    nowMonthListF();
}

// Making Year DoB Year in Form
let tempData = '';
let tempInitYear = 1900;
let tempNowYear = new Date();
tempNowYear = tempNowYear.getFullYear();
while(tempInitYear <= tempNowYear){
    if (tempNowYear == tempInitYear) {
        tempData += `<option value="${tempInitYear}" selected>${tempInitYear}</option>`;
    }else{
        tempData += `<option value="${tempInitYear}">${tempInitYear}</option>`;
    }
    tempInitYear++;
}
document.getElementById('dobYearList').innerHTML = tempData;
document.getElementById('nowYearList').innerHTML = tempData;


// =================  [For All Functionalites of Calculation] =====================
document.getElementById('ageCalculator').addEventListener('submit',ageCalc);

function ageCalc(e){
    e.preventDefault();
    let tempDate1 = document.getElementById('nowDateList').value;
    let tempMonth1 = monthList[document.getElementById('nowMonthList').value];
    let tempYear1 = document.getElementById('nowYearList').value;

    let tempDate2 = document.getElementById('dobDateList').value;
    let tempMonth2 = monthList[document.getElementById('dobMonthList').value];
    let tempYear2 = document.getElementById('dobYearList').value;

    let now = new Date(`${tempDate1} ${tempMonth1} ${tempYear1}`);
    let dob = new Date(`${tempDate2} ${tempMonth2} ${tempYear2}`);

    // Defining Present Date, Month & Year
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth();
    let nowDate = now.getDate();

    // Defining Date Of Birth Date, Month & Year
    let dobYear = dob.getFullYear();
    let dobMonth = dob.getMonth();
    let dobDate = dob.getDate();
    let day = dob.getDay();

    // Updating NowDate & NowMonth 
    if (nowDate < dobDate) {
        if (dobMonth == 0 || dobMonth == 2 || dobMonth == 4 || dobMonth == 6 || dobMonth == 7 || dobMonth == 9 || dobMonth == 11) {
            nowDate += 31;
        }else if (dobMonth == 3 || dobMonth == 5 || dobMonth == 8 || dobMonth == 10) {
            nowDate += 30;
        }else if (dobYear%4 == 0 && dobMonth == 1) {
            nowDate += 29;
        }else if (dobYear%4 != 0 && dobMonth == 1) {
            nowDate += 28;
        }
        // Updating nowMonth
        nowMonth -= 1;
    }

    // Updating NowMonth & NowYear 
    if (nowMonth < dobMonth) {
        nowMonth += 12;
        nowYear -= 1;
    }

    // Calculating Age 
    let year = nowYear - dobYear;
    let month = nowMonth - dobMonth;
    let date = nowDate - dobDate;

    switch(day){
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
    }
    // Showing Age
    document.getElementById('showAge').innerHTML = `<p>You were born on ${day}</p><p>Your age is ${year} years, ${month} months, ${date} days.</p>`;
}




