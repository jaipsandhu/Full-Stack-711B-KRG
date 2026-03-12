const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let title = document.getElementById("job-title").value;
    let company = document.getElementById("company-name").value;
    let location = document.getElementById("location").value;
    let salary = document.getElementById("salary").value;

    let job = {
        title,
        company,
        location,
        salary
    };

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.push(job);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    alert("Job Posted Successfully");

    form.reset();
});