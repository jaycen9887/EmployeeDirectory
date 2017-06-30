//variables
var name;
var role;
var startDate;
var monthsWorked;
var monthlyRate;
var totalBill;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA9FQeqDhp1XtMJ445FD9Zw11cehnDoGIo",
    authDomain: "employeedirectory-d2bc2.firebaseapp.com",
    databaseURL: "https://employeedirectory-d2bc2.firebaseio.com",
    projectId: "employeedirectory-d2bc2",
    storageBucket: "",
    messagingSenderId: "657337647452"
};
firebase.initializeApp(config);

var database = firebase.database();


/*function writeEmployeeData(name, role, startDate, monthsWorked, monthlyRate, totalBill){
    database.ref('employees/' + name).set({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        montlyRate: monthlyRate,
        totalBill: totalBill
    });
}*/


//add rows to output table
$("#submit").click(function (e) {
    e.preventDefault();

    //variables
    var month = new Date().getMonth;
    var day = new Date().getDay;
    var year = new Date().getYear;
    var date = day + "/" + month + "/" + year;

    var row = $("<tr>");

    name = $("#employee").val().trim();
    role = $("#role").val().trim();
    startDate = $("#startDate").val().trim();
    monthsWorked = date - startDate;
    monthlyRate = $("#monthlyRate").val().trim();
    totalBill = (monthsWorked * monthlyRate);

    row.append("<td>" + name + "</td>");
    row.append("<td>" + role + "</td>");
    row.append("<td>" + startDate + "</td>");
    row.append("<td>" + 33 + "</td");
    row.append("<td>" + monthlyRate + "</td>");
    row.append("<td>" + (33 * 2200) + "</td>");

    $(".table").append(row);



    database.ref("employes").push({
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: monthsWorked,
        montlyRate: monthlyRate,
        totalBill: totalBill
    });

});






database.ref('employees/').on("child_added", function (childSnapshot) {


});
