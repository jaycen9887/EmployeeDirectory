//add rows to output table
$("#submit").click(function(){
    
    //variables
    var date = new Date().;
    
    var row = $("<tr>");
    var column = $("<td>");
    
    var name = $("#employee").val().trim();
    var role = $("#role").val().trim();
    //var email = $("#email").val().trim();
    var startDate = $("#startDate").val().trim();
    var monthsWorked = date - startDate;
    var monthlyRate = $("#monthlyRate").val().trim();
    var totalBill = (monthsWorked * monthlyRate);
    
    row.append("<td>" + name +"</td>");
    row.append("<td>" + role +"</td>");
    //var row.append("<td>" + email +"</td>");
    row.append("<td>" + startDate +"</td>");
    row.append("<td>" + monthsWorked +"</td");
    row.append("<td>" + monthlyRate +"</td>");
    row.append("<td>" + totalBill +"</td>");
    
    $(".table").append(row);
    
    
    
});