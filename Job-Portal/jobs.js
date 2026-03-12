const container = document.getElementById("jobs-container");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function showJobs() {

    container.innerHTML = "";

    jobs.forEach(job => {

        let card = document.createElement("div");
        card.className = "job-card";

        card.innerHTML = `
            <h2>${job.title}</h2>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
        `;

        container.appendChild(card);
    });
}

showJobs();


function searchJob() {

    let value = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".job-card");

    cards.forEach(card => {

        if (card.innerText.toLowerCase().includes(value)) {

            card.style.border = "3px solid red";

        } else {

            card.style.border = "1px solid gray";

        }

    });
}