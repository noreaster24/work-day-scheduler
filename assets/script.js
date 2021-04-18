
var rightNow = moment();

var tomorrow = moment().add(1, "day").format("dddd, MM-D-YYYY");
console.log(tomorrow);

var auditTimeBlock = function(hourEl) {
    console.log(hourEl);
};

var createAgendaItem (hourEl) {
    var agendaP = $("<p>").addClass("m-1").text(agendaText);

    auditTimeBlock(hourEl);

    $("#textArea").append(agendaP);
}