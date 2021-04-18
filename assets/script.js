
var rightNow = moment();
var tomorrow = moment().add(1, "day").format("dddd, MM-D-YYYY");
console.log(tomorrow);



$("#textArea").on("click", function () {
    var text = $("<p></p>").text("Text.").trim()
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    $(".textArea").on("blur", "textarea", function () {
        var text = $(this)
            .val()
            .trim();
        var status = $(this)
            .closest(".textArea")
            .attr("id")
            .replace("text-", "");
        var index = $(this)
            .closest(".textArea")
            .index();
    })
});