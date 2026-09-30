document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get student details
    let name = document.getElementById("studentName").value.trim();
    let registerNumber = document.getElementById("registerNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;

    // Get marks
    let html = Number(document.getElementById("html").value);
    let css = Number(document.getElementById("css").value);
    let javascript = Number(document.getElementById("javascript").value);
    let bootstrap = Number(document.getElementById("bootstrap").value);

    // Calculate total
    let total = html + css + javascript + bootstrap;

    // Calculate percentage
    let percentage = (total / 400) * 100;

    // Pass/Fail
    let status;

    if (
        html >= 40 &&
        css >= 40 &&
        javascript >= 40 &&
        bootstrap >= 40
    ) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    // Display student details
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayRegister").textContent = registerNumber;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayCourse").textContent = course;

    // Display result
    document.getElementById("displayTotal").textContent =
        total + " / 400";

    document.getElementById("displayPercentage").textContent =
        percentage.toFixed(2) + "%";

    document.getElementById("displayStatus").textContent =
        status;

    // Show result
    document.getElementById("result").classList.remove("d-none");

});