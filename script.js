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

//add rows to output table
$("#submit").click(function(){
    
    //variables
    var month = new Date().getMonth;
    var day = new Date().getDay;
    var year = new Date().getYear;
    var date = day + "/" + month + "/" + year;

    var row = $("<tr>");
    
    var name = $("#employee").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#startDate").val().trim();
    var monthsWorked = date - startDate;
    var monthlyRate = $("#monthlyRate").val().trim();
    var totalBill = (monthsWorked * monthlyRate);
    
    row.append("<td>" + name +"</td>");
    row.append("<td>" + role +"</td>");
    row.append("<td>" + startDate +"</td>");
    row.append("<td>" + monthsWorked +"</td");
    row.append("<td>" + monthlyRate +"</td>");
    row.append("<td>" + totalBill +"</td>");
    
    $(".table").append(row);
    
    
    
});