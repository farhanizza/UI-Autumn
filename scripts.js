function myFunction()
{
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var todayDate = String(date.getDate()).padStart(2, '0');
    var datePattern = "Todays is date: "+ ' ' + todayDate + '-' + month + '-' + year;
    window.alert(datePattern);
}
function student() {
    var name = "No Students";
    window.alert(name);
}
