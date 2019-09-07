$(document).ready(function() {
    // write your code here
$.getJSON("data.json", function(data){
    var sDData = '';
    $.each(data, function(key,value){
        sDData += '<tr>';
        sDData += '<td>'+value.name;
        sDData += '<td>'+value.description+'</td>';
        sDData += '<td><a href="https://www.google.com/maps?q=' + value.location + '">'+value.location+'</a></td>';
        sDData += '</tr>'; 

    });

   $('#tableData').append(sDData);
   console.log(sDData);
});


});  
