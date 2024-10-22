document.getElementById("search-mentors").addEventListener("click", function() {
    const query = document.querySelector("input").value;
    
    // Fetch mentors from the backend based on search query
    fetch(`http://localhost:5000/search?query=${query}`)
        .then(response => response.json())
        .then(mentors => {
            const mentorsFeed = document.getElementById("mentors-feed");
            mentorsFeed.innerHTML = ""; // Clear previous mentors

            mentors.forEach(mentor => {
                const mentorCard = document.createElement("div");
                mentorCard.className = "mentor-card";
                mentorCard.innerHTML = `
                    <img src="https://via.placeholder.com/60" alt="Mentor Picture">
                    <h3>${mentor.name}</h3>
                    <p>Expertise: ${mentor.expertise}</p>
                    <p>Interests: ${mentor.interests.join(', ')}</p>
                `;
                mentorsFeed.appendChild(mentorCard);
            });
        })
        .catch(error => console.error('Error fetching mentors:', error));
});
