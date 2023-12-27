function toggleVisibility(sectionId) {
    const section = $("#" + sectionId); // Get section by id
    const div = $("div", section); // Get div inside section

    var arrow = $("h2 svg", section); // Get arrow
    arrow.css("transform", div.is(":visible") ? "rotate(-180deg)" : "rotate(0deg)"); // Rotate arrow 90 degrees if section is invisible

    div.slideToggle("fast") // Toggle div visibility
}
