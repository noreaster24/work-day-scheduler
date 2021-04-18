
var rightNow = moment();
var tomorrow = moment().add(1, "day").format("dddd, MM-D-YYYY");
console.log(tomorrow);

// save information to local storage when save button pressed
$("saveBtn").click(function () {
    localStorage.setItem("text", JSON.stringify(text));
});

// add event to description area
$(".description").on("change", "input[type='text']", function () {
    var text = $(this).text().trim();

    var textInput = $("<input>").attr("type", "text").addClass("form-control").val(text);

    $(this).replaceWith(textInput);
});

var auditEvents = function(hourEl) {
    // get time from event element
    var dueTime = $(hourEl).find("span").text().trim();
    // confirm it worked
    console.log(dueTime);

    // convert to moment object
    var time = moment(date, "L").set("hour", 17);

    // change color of description cells depending on time of day
    if(moment().isAfter(time)) {
        $(textArea).addClass("list-group-item-secondary");
    } 
    else if (Math.abs(moment() === moment)) {
        $(textArea).addClass("list-group-item-danger");
    }
    else if (Math.abs(moment().diff(time, "hours")) <= 1) {
        $(textArea).addClass("list-group-item-success");
    };
}