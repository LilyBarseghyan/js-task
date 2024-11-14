document.addEventListener("DOMContentLoaded", function () {
  let selectedFilters = {
    role: null,
    level: null,
    languages: new Set(),
    tools: new Set()
  };

  const filterBox = document.getElementById('filter-box');
  const jobContainer = document.getElementById('job-listing-container');
  let jobListings = [];

  // Function to update the job listings based on filters
  function updateJobListings(jobListings) {
    let jobListingsHtml = '';

    jobListings.forEach(job => {
      const matchesRole = !selectedFilters.role || selectedFilters.role === job.role;
      const matchesLevel = !selectedFilters.level || selectedFilters.level === job.level;
      const matchesLanguages = [...selectedFilters.languages].every(lang => job.languages.includes(lang));
      const matchesTools = [...selectedFilters.tools].every(tool => job.tools.includes(tool));

      if (matchesRole && matchesLevel && matchesLanguages && matchesTools) {
        const toolsButtonHtml = job.tools.map(tool => `<button class="tool-button" data-tool="${tool}">${tool}</button>`).join(' ');
        const languagesButtonHtml = job.languages.map(language => `<button class="language-button" data-language="${language}">${language}</button>`).join(' ');

        jobListingsHtml += `
          <div class="start">
            <img src="${job.logo}" alt="${job.company} logo">
            <div class="info">
              <div class="job-listing">
                <div class="header">
                  <span class="company-name">${job.company}</span>
                  ${job.new ? '<span class="new">New!</span>' : ''}
                  ${job.featured ? '<span class="featured">Featured</span>' : ''}
                </div>
                <div class="job">
                  <span class="job-title">${job.position}</span>
                </div>
                <div class="details">
                  <span class="time">${job.postedAt}</span>
                  <span class="job-type">${job.contract}</span>
                  <span class="location">${job.location}</span>
                </div>
              </div>
              <div class="additional-details">
                <button class="role" data-role="${job.role}">${job.role}</button>
                <button class="level" data-level="${job.level}">${job.level}</button>
                ${languagesButtonHtml}
                ${toolsButtonHtml}
              </div>
            </div>
          </div>
        `;
      }
    });

    jobContainer.innerHTML = jobListingsHtml;
    addFilterButtonListeners();
  }

  function renderSelectedFilters() {
    let filtersHtml = '';

    if (selectedFilters.role) filtersHtml += `<button class="filter-item-role" data-role="${selectedFilters.role}">${selectedFilters.role}<span class="clear-filter role" data-role="${selectedFilters.role}">X</span></button>`;
    if (selectedFilters.level) filtersHtml += `<button class="filter-item-level" data-level="${selectedFilters.level}">${selectedFilters.level}<span class="clear-filter level" data-level="${selectedFilters.level}">X</span></button>`;
    selectedFilters.languages.forEach(language => filtersHtml += `<button class="filter-item-language-button" data-language="${language}">${language}<span class="clear-filter language-button" data-language="${language}">X</span></button>`);
    selectedFilters.tools.forEach(tool => filtersHtml += `<button class="filter-item-tool-button" data-tool="${tool}">${tool}<span class="clear-filter tool-button" data-tool="${tool}">X</span></button>`);

    if (filtersHtml) {
      filtersHtml += `<button id="clear-filters">Clear</button>`;
    }

    filterBox.innerHTML = filtersHtml;

    const isAnyFilterSelected = selectedFilters.role || selectedFilters.level || selectedFilters.languages.size > 0 || selectedFilters.tools.size > 0;
    filterBox.style.display = isAnyFilterSelected ? 'block' : 'none';

    const clearButton = document.getElementById('clear-filters');
    if (clearButton) {
      clearButton.addEventListener('click', clearAllFilters);
    }
  }

  function clearAllFilters() {
    selectedFilters = {
      role: null,
      level: null,
      languages: new Set(),
      tools: new Set()
    };
    renderSelectedFilters();
    updateJobListings(jobListings);
  }

  function addFilterButtonListeners() {
    document.querySelectorAll('.role').forEach(button => {
      button.addEventListener('click', () => {
        selectedFilters.role = button.dataset.role === selectedFilters.role ? null : button.dataset.role;
        renderSelectedFilters();
        updateJobListings(jobListings);
      });
    });

    document.querySelectorAll('.level').forEach(button => {
      button.addEventListener('click', () => {
        selectedFilters.level = button.dataset.level === selectedFilters.level ? null : button.dataset.level;
        renderSelectedFilters();
        updateJobListings(jobListings);
      });
    });

    document.querySelectorAll('.language-button').forEach(button => {
      button.addEventListener('click', () => {
        const language = button.dataset.language;
        if (selectedFilters.languages.has(language)) {
          selectedFilters.languages.delete(language);
        } else {
          selectedFilters.languages.add(language);
        }
        renderSelectedFilters();
        updateJobListings(jobListings);
      });
    });

    document.querySelectorAll('.tool-button').forEach(button => {
      button.addEventListener('click', () => {
        const tool = button.dataset.tool;
        if (selectedFilters.tools.has(tool)) {
          selectedFilters.tools.delete(tool);
        } else {
          selectedFilters.tools.add(tool);
        }
        renderSelectedFilters();
        updateJobListings(jobListings);
      });
    });
  }

  // Initial fetch and render
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      jobListings = data;
      updateJobListings(jobListings);
    })
    .catch(error => console.error("Error fetching data:", error));
});
