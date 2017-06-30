//variables
var name;
var role;
var startDate;
var monthsWorked;
var monthlyRate;
var totalBill;

<<<<<<< HEAD
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
=======
   // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBVe0AdtLEQMr_3WKMrXCzRWY2I14LfKY",
    authDomain: "employees-1f1f3.firebaseapp.com",
    databaseURL: "https://employees-1f1f3.firebaseio.com",
    projectId: "employees-1f1f3",
    storageBucket: "employees-1f1f3.appspot.com",
    messagingSenderId: "670118912128"
  };
  firebase.initializeApp(config);
>>>>>>> 0d10f9ed42fc07397cc914349d842d37b4aa261a

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
<<<<<<< HEAD



    database.ref("employes").push({
=======
    
    
    
    var newEmployee = {
        
>>>>>>> 0d10f9ed42fc07397cc914349d842d37b4aa261a
        name: name,
        role: role,
        startDate: startDate,
        monthsWorked: 33,
        montlyRate: monthlyRate,
<<<<<<< HEAD
        totalBill: totalBill
    });

=======
        totalBill: (33 * monthlyRate)
    };
    
    database.ref().push(newEmployee);
    
>>>>>>> 0d10f9ed42fc07397cc914349d842d37b4aa261a
});






database.ref('employees/').on("child_added", function (childSnapshot) {


});
