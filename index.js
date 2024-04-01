async function populateAbout() {
    const response = await fetch('data/about.txt');
    const data = await response.text();
    const aboutEl = document.querySelector('#about');
    const newEl = document.createElement('p');
    
    newEl.innerHTML = data;

    aboutEl.appendChild(newEl);
}

function populateList(listName) {
    return async () => {

        const response = await fetch(`data/${listName}.json`);
        const data = await response.json();
        const listEl = document.querySelector(`.${listName}-list`);
        
        for (const item of data) {
            const newEl = document.createElement('li');
            
            newEl.innerHTML = item;
            
            listEl.appendChild(newEl);
        }
    }
}

function populateTimeline(sectionName) {
    return async () => {
        const response = await fetch(`data/${sectionName}.json`);
        const data = await response.json();
        const timeline = document.querySelector(`#${sectionName} .timeline`);

        for (const { timePeriod, description } of data) {
            const timelineItem = document.createElement('div');
            const timePeriodEl = document.createElement('div');
            const descriptionEl = document.createElement('div');

            timelineItem.classList.add('timeline-item');
            timePeriodEl.classList.add('time-period');
            descriptionEl.classList.add('item-description');

            timePeriodEl.innerHTML = timePeriod;
            descriptionEl.innerHTML = description;

            timelineItem.appendChild(timePeriodEl);
            timelineItem.appendChild(descriptionEl);
            timeline.appendChild(timelineItem);
        }
    }
}

const populateSkills = populateList('skills');
const populateEducation = populateTimeline('education');
const populateProfessional = populateTimeline('professional');

populateAbout();
populateSkills();
populateEducation();
populateProfessional();
