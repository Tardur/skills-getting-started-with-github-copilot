const activities = [
    {
        name: "Morning Yoga",
        time: "8:00 AM",
        location: "Zen Garden",
        participants: ["Alice", "Bob", "Charlie"]
    },
    {
        name: "Team Lunch",
        time: "12:30 PM",
        location: "Cafeteria",
        participants: ["David", "Eve", "Frank"]
    },
    // Add participants array to other activities...
];

function createActivityCard(activity) {
    const card = document.createElement('div');
    card.classList.add('activity-card');
    
    const nameElement = document.createElement('h2');
    nameElement.classList.add('activity-name');
    nameElement.textContent = activity.name;
    card.appendChild(nameElement);
    
    const timeElement = document.createElement('p');
    timeElement.classList.add('time');
    timeElement.textContent = activity.time;
    card.appendChild(timeElement);
    
    const locationElement = document.createElement('p');
    locationElement.classList.add('location');
    locationElement.textContent = activity.location;
    card.appendChild(locationElement);
    
    const participantsList = document.createElement('ul');
    participantsList.classList.add('participants-list');
    activity.participants.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = participant;
        participantsList.appendChild(li);
    });
    card.appendChild(participantsList);
    
    return card;
}