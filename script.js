const matchStartTime = new Date('2024-09-21T20:00:00');
 
    function updateMatchDetails() {
        // Set the match start date and time dynamically
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = matchStartTime.toLocaleDateString('en-US', options).replace(',', ' at');
        document.getElementById('match-date').innerHTML = `${formattedDate}`;
 
        // Update the time lapsed
        updateMatchTimeLapsed();
    }
 
    function updateMatchTimeLapsed() {
        const now = new Date();
        const diffInMinutes = Math.floor((now - matchStartTime) / 1000 / 60);
 
        // Update the time lapsed in the DOM
        document.getElementById('match-time-lapsed').innerText = `${diffInMinutes}'`;
    }
 
    // Update the match details and time lapsed every minute
    setInterval(updateMatchTimeLapsed, 60000);
 
    // Initial update
    updateMatchDetails();
