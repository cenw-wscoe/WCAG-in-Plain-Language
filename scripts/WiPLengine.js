var content;
var dataTable = document.getElementById("dataTable");

$('document').ready(function(){

    //Datatable to fill in using json file
    $.getJSON("/resources/data/en.json", function (data) {
        content = data;
        populateTable();
    });
});

function populateTable() {
    //alert(content[0].Question);
    var i = -1;
    $.each(content, function() {
        i++;
        console.log(content[i].Question);
        console.log(content[i].Failure);
        console.log(content[i].AnswerVerified);

        $("#dataTable").append("<tr><td>"+ content[i].Question +"</td>"+"<td><p>"+ content[i].Answer.Main +"</p>" +"<details><summary>MoreInformation</summary><p>"+ content[i].Answer.Details +"</p></details></td>"+"<td><a href='"+ content[i].SuccessCriteria.Link +"'"+ "'>" + content[i].SuccessCriteria.Title +"</a></td>"+"<td>"+ content[i].Failure +"</td>"+"<td>"+ content[i].AnswerVerified +"</td>"+"</tr>");
    })
}