function createFactCard(fact) {
    return `
        <div class="fact-card">
            <div class="fact-card-inner">
                <div class="fact-card-front">
                    <h3>${fact.title}</h3>
                    <span class="click-hint">Click to reveal fact</span>
                </div>
                <div class="fact-card-back">
                    <p>${fact.content}</p>
                </div>
            </div>
        </div>
    `;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayFacts() {
    const shuffledFacts = shuffleArray([...facts]);
    const factContainer = document.getElementById('factContainer');
    factContainer.innerHTML = shuffledFacts.map(createFactCard).join('');
    
    // Add click event listeners to all cards
    document.querySelectorAll('.fact-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

document.getElementById('refresh-btn').addEventListener('click', displayFacts);

// Initial display
displayFacts();
