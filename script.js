const profiles = [
    { name: "John Doe", role: "Web Developer", bio: "Expert in front-end development." },
    { name: "Jane Smith", role: "UI Designer", bio: "Passionate about user experiences." }
];
const correctPIN = "13052003";

function checkPIN() {
    const pinInput = document.getElementById('pin-input').value;
    if (pinInput === correctPIN) {
        document.getElementById('pin-screen').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        loadProfiles();
    } else {
        document.getElementById('pin-error').textContent = 'Incorrect PIN!';
    }
}

function loadProfiles() {
    const container = document.getElementById('profile-container');
    profiles.forEach((profile, index) => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        profileCard.innerHTML = `<h2>${profile.name}</h2><p>${profile.role}</p>`;
        profileCard.onclick = () => showDetails(index);
        container.appendChild(profileCard);
    });
}

function showDetails(index) {
    const details = profiles[index];
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = `<h2>${details.name}</h2><p>${details.role}</p><p>${details.bio}</p>`;
    document.getElementById('profile-container').style.display = 'none';
    document.getElementById('profile-details').style.display = 'block';
}

function goBack() {
    document.getElementById('profile-details').style.display = 'none';
    document.getElementById('profile-container').style.display = 'grid';
}
