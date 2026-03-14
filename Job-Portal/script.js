function getJobs() {
    return JSON.parse(localStorage.getItem('jobs') || '[]');
}

function deleteJob(id) {
    if (confirm('Are you sure you want to delete this job?')) {
        const jobs = getJobs().filter(job => job.id !== id);
        localStorage.setItem('jobs', JSON.stringify(jobs));
        renderJobs(document.getElementById('search-input')?.value || '');
        updateStats();
    }
}

function renderJobs(searchTerm = '') {
    const container = document.getElementById('jobs-container');
    const jobs = getJobs();
    
    const filteredJobs = jobs.filter(job => {
        const searchLower = searchTerm.toLowerCase();
        return job.company.toLowerCase().includes(searchLower) ||
               job.position.toLowerCase().includes(searchLower);
    });
    
    if (filteredJobs.length === 0) {
        container.innerHTML = '<p class="no-jobs">No jobs found. <a href="add-job.html">Add your first job!</a></p>';
        return;
    }
    
    container.innerHTML = filteredJobs.map(job => `
        <div class="job-card">
            <div class="job-info">
                <h3>${job.position}</h3>
                <p>${job.company} • ${job.date}</p>
                ${job.notes ? `<p>${job.notes}</p>` : ''}
            </div>
            <div style="display: flex; align-items: center;">
                <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function updateStats() {
    const jobs = getJobs();
    
    document.getElementById('total-jobs').textContent = jobs.length;
}
