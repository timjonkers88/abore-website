document.addEventListener('DOMContentLoaded', (event) => {
    console.log('JavaScript is geladen');
    const learnMoreBtn = document.getElementById('learn-more-btn');
    
    if (learnMoreBtn) {
        console.log('Knop gevonden');
        learnMoreBtn.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Meer informatie binnenkort beschikbaar!');
        });
    } else {
        console.log('Knop niet gevonden');
    }
});
