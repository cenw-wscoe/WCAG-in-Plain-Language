var content;
//var jsonFile = "https://raw.githubusercontent.com/cenw-wscoe/WCAG-in-Plain-Language/main/resources/data/en.json"; //PROD
var jsonFile = "/resources/data/en.json"; //DEV/Local

$('document').ready(function(){

    //Datatable to fill in using json file
    $.getJSON(jsonFile, function (data) {
        content = data;
        populateTable();
    });
});

function populateTable() {
    //alert(content[0].Question);
    var i = -1;
    $.each(content, function() {
        i++;

        if (content[i].Answer.Details != "") {
            $("#dataTable").append(
                "<tr>" +
                    "<td>"+ content[i].Question +"</td>" +
                    "<td>" + 
                        "<p>"+ content[i].Answer.Main +"</p>" +
                        "<details>" + 
                            "<summary>More Information</summary>" + 
                            "<p>"+ content[i].Answer.Details +"</p>" +
                        "</details>" + 
                    "</td>" + 
                    "<td>"+ content[i].SuccessCriteria +"</td>" + 
                    "<td>"+ content[i].Failure +"</td>" + 
                    "<td>"+ content[i].AnswerVerified +"</td>" + 
                "</tr>");
        } else {
            $("#dataTable").append(
                "<tr>" +
                    "<td>"+ content[i].Question +"</td>" +
                    "<td>" + 
                        "<p>"+ content[i].Answer.Main +"</p>" + 
                    "</td>" + 
                    "<td>"+ content[i].SuccessCriteria +"</td>" + 
                    "<td>"+ content[i].Failure +"</td>" + 
                    "<td>"+ content[i].AnswerVerified +"</td>" + 
                "</tr>");
        }
    })
}