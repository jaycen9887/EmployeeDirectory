//add rows to output table
$("#submit").click(function(){
    
    //variables
    var date = new Date();
    var row = $("<tr>");
    var column = $("<td>");
    
    var name = $("#employee").val().trim();
    var role = $("#role").val().trim();
    //var email = $("#email").val().trim();
    var startDate = $("#startDate").val().trim();
    var monthsWorked = date - startDate;
    var monthlyRate = $("#monthlyRate").val().trim();
    var totalBill = monthsWorked * monthlyRate;
    
    

    
    $(".table").append(row);
    
    
    
});